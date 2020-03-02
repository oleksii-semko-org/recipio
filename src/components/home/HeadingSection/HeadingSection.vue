<template>
  <div class="hello">
    <h1>SSSSSSSS</h1>
  </div>
</template>

<script>
import store from '../store/store';

export default {
  name: 'HeadingSection',
  mounted () {
    console.log('mounted');
    this.fetchCuisinesRecipe();
  },
  methods: {
    fetchCuisinesRecipe() {
      console.log('fetchCuisinesRecipe 0', this);

      store.dispatch('fetchCuisinesRecipe');
    }
  },
  computed: {
    recipes: () => {
      return store.state.recipes; // changed here
    }
  }
}
</script>
