<template>
  <div>
    <button v-on:click="clicked('you just clicked on button 2')">
      Button 2
    </button>
    <h1>{{text2}}</h1>
  </div>
</template>;
<script>
export default {
  name: "Modal",
  props:['text2']
};
</script>
