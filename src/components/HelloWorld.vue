<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="columns medium-3" v-for="result in results" :key="result">
      <div class="card">
        <div class="card-divider">
          {{ result.recipe.label }}
        </div>
        <div class="card-section">
          <img :src=result.recipe.image />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const ApiBaseUrl = "https://api.edamam.com";
const url = "/search";
const AppKey = "b17a326c937b31d61f448827dee723e3";
const AppId = "b56b266a";

function buildUrl (url) {
  return `${ApiBaseUrl}${url}?q=chicken&app_id=${AppId}&app_key=${AppKey}`
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      results: []
    }
  },
  mounted () {
    this.getPosts(url);
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        // console.log(this);
        // console.log(response);
        this.results = response.data.hits;
      }).catch( error => {error});
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
