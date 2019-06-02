<template>
    <div id="info-container">
        <h2>{{products[this.$route.params.id].name}}</h2>
        <div id="in-stock">
            <p>Stock: {{inStock}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'info',
    props:['products','inStock']
}
</script>

<style>

</style>
