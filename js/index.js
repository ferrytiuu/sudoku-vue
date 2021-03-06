window.addEventListener('load', carga);

function carga() {

    /*let n = 0;

    for (let i = 0; i < 9; i++) {
        fila = document.createElement('tr');
        fila.setAttribute("id", i);
        document.getElementById('taulell').appendChild(fila);
        for (let j = 0; j < 9; j++) {
            cella = document.createElement('td');
            cella.setAttribute("id", i + '-' + j);
            document.getElementById(i).appendChild(cella);
            numero = document.createElement('input');
            numero.setAttribute("id", 'numero' + n);
            numero.setAttribute('maxlength', '1');
            document.getElementById(i + '-' + j).appendChild(numero);
            n++;
        }
    }*/

    /*class sudoku1{
        constructor(resolt,noresolt){
            this.resolt = [[1,6,5,3,9,7,4,7,8][3,2,4,1,8,7,5,6,9][7,8,9,2,6,5,3,4,1][9,4,6,8,1,3,7,5,2][8,5,3,7,2,9,4,1,6][2,1,7,5,4,6,8,9,3][6,7,1,4,3,2,9,8,5][5,3,8,9,7,1,6,2,4][4,9,2,6,5,8,1,3,7]];
            this.noresolt = [[1,6,5,3,0,0,0,7,8][3,2,0,1,0,0,5,0,0][0,0,0,2,6,0,0,4,0][9,0,6,0,0,3,0,0,0][0,0,0,7,2,9,0,0,6][0,0,7,0,4,0,8,0,0][0,0,0,0,0,0,9,0,0][0,3,8,0,0,0,0,0,0][0,0,0,6,0,0,1,0,7]];
        }
    }

    class sudoku2{
        constructor(resolt,noresolt){
            this.resolt = [[7,3,1,5,6,9,4,2,8][5,2,9,8,1,4,7,3,6][6,4,8,3,2,7,5,1,9][2,8,4,1,7,6,9,5,3][1,9,5,4,3,8,6,7,2][3,6,7,2,9,5,8,4,1][4,1,6,7,8,3,2,9,5][8,5,3,9,4,2,1,6,7][9,7,2,6,5,1,3,8,4]];
            this.noresolt = [[7,0,1,0,0,9,0,2,0][0,0,9,0,0,0,0,0,6][0,4,0,0,2,0,5,1,0][0,0,0,0,0,6,9,0,3][0,0,5,0,0,8,0,0,0][0,0,0,0,9,0,8,4,1][0,0,6,7,0,3,0,0,0][8,5,0,0,0,0,0,0,0][0,0,0,0,5,0,3,0,0]];
        }
    }

    class sudoku3{
        constructor(resolt,noresolt){
            this.resolt = [[6,7,5,8,1,3,9,4,2][3,9,1,4,7,2,8,5,6][8,4,2,6,5,9,1,7,3][1,6,8,9,4,7,2,3,5][9,2,3,5,8,6,4,1,7][4,5,7,2,3,1,6,9,8][2,1,4,3,6,5,7,8,9][5,8,9,7,2,4,3,6,1][7,3,6,1,9,8,5,2,4]];
            this.noresolt = [[0,0,5,0,0,0,0,4,0][0,0,0,4,7,0,0,0,6][8,0,2,0,0,0,1,0,0][1,0,0,0,0,0,2,0,0][0,0,3,0,0,6,0,0,0][0,5,7,0,3,0,0,0,0][0,1,0,0,6,5,0,8,0][0,0,0,0,0,0,3,0,0][0,0,0,1,9,0,5,0,0]];
        }
    }*/

    class sudoku {
        constructor(resolt, noresolt) {
            this.resolt;
            this.noresolt;
        }
    }

    let app = new Vue({
        el: '#app',
        data: function () {
            return {
                dadesPartida: { 'nomJugador': '', 'temps': 0, },
                victoria: false,
                derrota: false,
                comptador: 0,
                comptadadorPartida: setInterval(() => {
                    this.comptador++
                }, 1000),
                sudoku:
                {
                    resolt: [[1, 6, 5, 3, 9, 4, 2, 7, 8], [3, 2, 4, 1, 8, 7, 5, 6, 9], [7, 8, 9, 2, 6, 5, 3, 4, 1], [9, 4, 6, 8, 1, 3, 7, 5, 2], [8, 5, 3, 7, 2, 9, 4, 1, 6], [2, 1, 7, 5, 4, 6, 8, 9, 3], [6, 7, 1, 4, 3, 2, 9, 8, 5], [5, 3, 8, 9, 7, 1, 6, 2, 4], [4, 9, 2, 6, 5, 8, 1, 3, 7]],
                    noresolt: [[1, 6, 5, 3, 0, 0, 0, 7, 8], [3, 2, 0, 1, 0, 0, 5, 0, 0], [0, 0, 0, 2, 6, 0, 0, 4, 0], [9, 0, 6, 0, 0, 3, 0, 0, 0], [0, 0, 0, 7, 2, 9, 0, 0, 6], [0, 0, 7, 0, 4, 0, 8, 0, 0], [0, 0, 0, 0, 0, 0, 9, 0, 0], [0, 3, 8, 0, 0, 0, 0, 0, 0], [0, 0, 0, 6, 0, 0, 1, 0, 7]]
                }

            }
        },
        template: `
            <section>
            <span id="temporitzador">{{ comptador }}</span>
                <table id="taulell">
                </table>
                <button v-on:click="comprobarResultat">Comprobar resultat</button>
                <button v-on:click="autoCompletar">Bot??n hack</button>
                <transition name="slide-fade">
                    <h1 v-if="victoria">Has guanyat</h1>
                </transition>
                <transition name="slide-fade">
                    <h1 v-if="derrota">Has perdut</h1>
                </transition>
            </section>
        `, methods: {
            crearCelles: function () {
                let n = 1;
                for (let i = 0; i < 9; i++) {
                    fila = document.createElement('tr');
                    fila.setAttribute("id", i);
                    document.getElementById('taulell').appendChild(fila);
                    for (let j = 0; j < 9; j++) {
                        cella = document.createElement('td');
                        cella.setAttribute("id", i + '-' + j);
                        document.getElementById(i).appendChild(cella);
                        numero = document.createElement('input');
                        numero.setAttribute("id", 'numero' + n);
                        numero.setAttribute('maxlength', '1');
                        if (this.sudoku.noresolt[i][j] != 0) {
                            numero.setAttribute("value", this.sudoku.noresolt[i][j]);
                            numero.setAttribute("readonly", "");
                            numero.classList.add("numeroNegreta");
                        }
                        document.getElementById(i + '-' + j).appendChild(numero);
                        n++;
                    }
                }
                
            }, comprobarResultat() {
                let n = 1;
                let encerts = 0;
                let faltenCelles = false;
                for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 9; j++) {
                        if (document.getElementById('numero' + n).value.length == 0) { faltenCelles = true }

                        if (document.getElementById('numero' + n).value == this.sudoku.resolt[i][j]) {
                            console.log('correcte');
                            document.getElementById(i + '-' + j).classList.remove('incorrecte');
                            document.getElementById('numero' + n).classList.remove('incorrecte');
                            document.getElementById(i + '-' + j).classList.add('correcte');
                            document.getElementById('numero' + n).classList.add('correcte');
                            encerts++;

                        } else {
                            console.log('incorrecte');
                            document.getElementById(i + '-' + j).classList.remove('correcte');
                            document.getElementById('numero' + n).classList.remove('correcte');
                            document.getElementById(i + '-' + j).classList.add('incorrecte');
                            document.getElementById('numero' + n).classList.add('incorrecte');
                        }
                        n++;
                    }
                } if (faltenCelles) {
                    alert("Omple totes les celles");
                } else {
                    if (encerts == 81) {
                        clearInterval(this.comptadadorPartida);
                        this.victoria = true;
                        setTimeout(() => {
                            let jugador = prompt("Enhorabona. Introdueix el teu nom");
                            this.dadesPartida.nomJugador = jugador;
                            this.dadesPartida.temps = this.comptador;
                            if (localStorage.getItem("sudoku1")===null) {
                                localStorage.sudoku1 = JSON.stringify([this.dadesPartida]);
                            } else {
                                let puntuacions = JSON.parse(localStorage.getItem('sudoku1'));
                                puntuacions.push(this.dadesPartida);
                                localStorage.sudoku1 = JSON.stringify(puntuacions);
                            }
                        }, 3000)
                    } else {
                        this.derrota = true;
                    }
                }
            },
            autoCompletar() {
                let numero2=1;
                for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 9; j++) { 
                        document.getElementById('numero'+numero2).setAttribute('value', this.sudoku.resolt[i][j]);
                        numero2++;
                    }
                }
            }
        },
    })
    app.crearCelles();
}