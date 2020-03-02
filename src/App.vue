<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">    
    <HeadingSection/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HeadingSection from './components/home/HeadingSection/HeadingSection'


export default {
  name: 'app',
  components: {
    HelloWorld,
    HeadingSection
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
