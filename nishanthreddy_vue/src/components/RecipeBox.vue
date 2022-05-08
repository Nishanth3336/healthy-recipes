<template>
  <div class="recipes">
    <img class="image" :src=recipe.image /> 
    <h1 class="recipename">
        {{recipe.recipeName}}
    </h1>
    <h4 class="description">
        {{recipe.description}}
    </h4> 
    <h6 class="prepTime">(Preparation Time =
        {{recipe.prepTime}} minutes)
    </h6>    
    <div class="link">
    <a :href=recipe.link>click here to see more</a>
    </div>
  </div>
</template>

<script>
export default {
    name:'RecipeBox',

    props: {
        "recipe": Array
    }

}
</script>

<style>
.recipes{
    background-color: #b6c454;
    max-height: 200px;
    width: auto;
    padding: 10px;
    margin: 10px;
    text-align: justify;
    border: 5px solid black;
    border-radius: 10px;
}
.image{
 height: 200px;
 float: right;
}
.description{
    width:500px;
    display: inline-block;
}
.recipename {
    display: inline-block;
}
.prepTime{
    display: inline-block;
}
.link{
    display: inline-block;
}

</style>