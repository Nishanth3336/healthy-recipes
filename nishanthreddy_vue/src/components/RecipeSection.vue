<template>
  <div class="recipe-section" > 
      <div v-for=" recipe in recipes" :key="recipe.id">
        <RecipeBox :recipe="recipe" />
      </div>
    </div>
</template>

<script>
import RecipeBox from './RecipeBox.vue'

export default {
    name: 'RecipeSection',
    components: {
        RecipeBox
    },
    props: {
        recipes: Array
    }
}
</script>

<style>
    .recipe-section {
        display: block;
        background-color:black;
        padding: 10px;
    }
</style>