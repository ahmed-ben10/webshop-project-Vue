<template>
    <div id="setToCart">
        <input type="number" 
            id="setCart" 
            @click="updateCart" 
            :min="0"
            :max="10"
            v-model="quantity"
            :class="{ disabledButton: !products[this.$route.params.id].stock }" 
            :disabled="!products[this.$route.params.id].stock"
            @keyup="updateCart">
    </div>
</template>

<script>
export default {
    name:"cart_buttons",
    props:['products','aantal'],
    data:function(){
        return{
            quantity:0
        }
    },
    methods:{
        updateCart(){
            this.$emit('updateCart', this.quantity);
        }
    }
}
</script>

<style>
    
</style>
