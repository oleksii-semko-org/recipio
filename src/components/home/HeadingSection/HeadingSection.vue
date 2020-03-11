<template>
  <div class="categories">
    <div class="category" v-for="category in categories" :key="category.idCategory">
      <img :src="category.strCategoryThumb" />
      <h1>{{ category.strCategory }}</h1>
      <p>{{ category.strCategoryDescription }}</p>
    </div>
    
  </div>
</template>

<script>
import store from '../store/store';

export default {
  name: 'HeadingSection',
  mounted () {
    this.setHeaderClientData();
  },
  methods: {
    setHeaderClientData() {
      store.dispatch('storeCategories');
    },
  },
  computed: {
    categories: () => {
      return store.state.categories;
    }
  }
}
</script>
