<template>
    <div id="order-button">
        <button @click="updateCart">Order</button>
    </div>
</template>

<script>
export default {
name:"orderButton",
 methods:{
        updateCart(){
            this.$emit('updateCart');
        }
    }
}
</script>

<style>

</style>
