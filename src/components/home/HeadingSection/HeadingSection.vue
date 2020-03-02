<script>
export default {
  template: '#heading-section',
  methods: {
    fetchCuisinesRecipe() {
      this.$store.dispatch('fetchCuisinesRecipe');
    }
  },
  computed: {
    recipes: () => {
      return this.$store.state.recipes; // changed here
    }
  }
}
</script>
