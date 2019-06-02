<template>
    <div id="specs-container">
        <h4>Specs:</h4>
        <ul id="specs">
            <li>Android: {{products[this.$route.params.id].android}}</li>
            <li>Scherm: {{products[this.$route.params.id].scherm}}</li>
            <li>Camera: {{products[this.$route.params.id].camera}}</li>
            <li>Schermtype: {{products[this.$route.params.id].schermType}}</li>
            <li>Resolutie: {{products[this.$route.params.id].resolutie}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["products"]
}
</script>

<style>

</style>
