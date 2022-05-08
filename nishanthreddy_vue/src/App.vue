<template>
  <navigationMenu />
  <AboutUS/>
  <RecipeSection :recipes="recipes" />
  <footer-section/>
</template>

<script>
import AboutUS from './components/AboutUS.vue'
import footerSection from './components/footerSection.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import RecipeSection from './components/RecipeSection.vue'


export default {
  name: 'App',
  components: {
    NavigationMenu,AboutUS, RecipeSection,footerSection
  },
  data() {
    return {
      recipes: [],
      resultRecipes:[]

    }
  },
  methods: {
    async fetchRecipes() {
      const response = await fetch("https://nishanthhealthrecipies.herokuapp.com/api");
      const data = await response.json();
      console.log(data);
      return data
    }
  },
  async created() {
    this.resultRecipes = await this.fetchRecipes()
    console.log(this.resultRecipes)
    this.recipes=this.resultRecipes.recipes
    
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: black;
}
</style>
