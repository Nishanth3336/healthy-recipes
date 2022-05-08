<template>
<footer id="footer">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 

    <div class=footeritems>
    <i class="footeritem fa fa-copyright">2022HealthyRecipes</i>
    <i class="footeritem fa fa-envelope" aria-hidden="true">HealthyRecipes.com</i>
    <i class="footeritem fa fa-phone-square" aria-hidden="true">4753233903</i>
</div>
    </footer>

</template>

<script>
export default {
    name:"footerSection"

}
</script>

<style>
footer{
    grid-area: footer;
    background-color: #91972a;
    height: 90px;
    padding: 10px;
}
.footeritems{
    padding: 20px;
    margin: 10px;

}
.footeritem{
    padding: 20px;
}


</style>