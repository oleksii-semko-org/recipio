<template>
  <div class="hello">
    <h1>Common component</h1>
  </div>
</template>

<script>
export default {
  name: 'CommonComponentExample',
  props: {},
  data: function() {
    return {
      someData: []
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
