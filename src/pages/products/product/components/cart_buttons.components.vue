<template>
    <div id="setToCart">
        <input type="number" 
            id="setCart" 
            @click="updateQuantity" 
            :min="0"
            :max="10"
            v-model="Aantal"
            :class="{ disabledButton: !products[this.$route.params.id].stock }" 
            :disabled="!products[this.$route.params.id].stock"
            @keyup="updateQuantity">
    </div>
</template>

<script>
export default {
    name:"cart_buttons",
    mounted(){
        this.Aantal=this.aantal;
    },
    data:function(){
        return{
            Aantal:null
        }
    },
    props:['products','aantal'],
    methods:{
        updateQuantity(){
            this.$emit('updateQuantity', this.Aantal);
            console.log(this.Aantal)
        }
    }
}
</script>

<style>
    
</style>
