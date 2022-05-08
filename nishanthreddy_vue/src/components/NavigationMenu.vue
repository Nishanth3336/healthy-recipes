<template>
  <div class="navigationMenu">
    <span class="Navititle">HEALTHY RECIPES</span>
    <a class="naviitems" href="#ABOUTUS">ABOUTUS</a>
    <a class="naviitems" href="#footer">CONTACT</a>
  </div>
</template>

<script>
export default {
    name: 'navigationMenu'

}
</script>

<style>
.navigationMenu{
    background-color:#e6d3a3;
    height: 35px;
    padding: 10px;
    
}
.Navititle{
    font-size: 17px;
    margin: 10px;
}

.naviitems{
    display: block;
    float: right;
    color:black;
    margin: 10px;
}

</style>