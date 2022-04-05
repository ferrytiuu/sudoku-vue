const dbName = "sudokuNames";

let db;


let accesDB = new Promise(function (myResolve, myReject) {
    var request = indexedDB.open(dbName, 9);

    request.onerror = function (event) {
        myReject();
    };
    request.onsuccess = function (event) {
        db = event.target.result;
        myResolve();
    };
    request.onupgradeneeded = function (event) {
        var db = event.target.result;
        try {
            db.deleteObjectStore("titols");
        } catch (e) {

        }
        db = event.target.result;
        var objectStore = db.createObjectStore("titols", {keyPath: "id"});

        objectStore.createIndex("id", "id", {unique: true});

        objectStore.transaction.oncomplete = function (event) {
            var customerObjectStore = db.transaction("titols", "readwrite").objectStore("titols");
            customerData = [
                {id: 1, nom: "Sudoku 1"},
                {id: 2, nom: "Sudoku 2"},
                {id: 3, nom: "Sudoku 3"},
            ]
            for (var i in customerData) {
                customerObjectStore.add(customerData[i]);
            }
            myResolve();

        }

    };
});

async function obtenerTitulo(id) {
    var customerObjectStore = db.transaction("titols", "readwrite").objectStore("titols");
    console.log("13");
    let entrades=[];
    return new Promise((resolve, reject) => {
        customerObjectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                console.log("Name for SSN " + cursor.key + " is " + cursor.value.nom);
                entrades.push(cursor.value.nom);
                cursor.continue();
            } else {
                console.log("No more entries!");
                resolve(entrades);
            }
        };


    })

}
