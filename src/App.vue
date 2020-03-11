<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">    
    <HeadingSection/>
  </div>
</template>

<script>

import HeadingSection from './components/home/HeadingSection/HeadingSection'

export default {
  name: 'app',
  components: {
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
  color: #2c3e20;
  margin-top: 60px;
}
</style>
