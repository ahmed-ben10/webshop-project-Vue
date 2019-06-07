<template>
    <div id="order-button-container">
        <button id="order-button" @click="updateCart">Order</button>
    </div>
</template>

<script>
export default {
    name:'orderButton',
    methods:{
            updateCart(){
                this.$emit('updateCart');
            }
        }
    }
</script>

<style>

</style>
