<template>
    <div id="setToCart">
        <button 
            :class="{ disabledButton: !products[this.$route.params.id].stock }" 
            :disabled="!products[this.$route.params.id].stock" id="addToCart"  
            @click="orderPhone"
            >Order: ({{aantal}})
        </button>
        <button 
            :class="{ disabledButton: !products[this.$route.params.id].stock }" 
            :disabled="!products[this.$route.params.id].stock" id="removeFromCart" 
            @click="removePhone"
            >Remove
        </button>
    </div>
</template>

<script>
export default {
    name:"cart_buttons",
    props:['products','aantal'],
    methods:{
        orderPhone(){
            this.$emit("orderPhone");
        },
        removePhone(){
            this.$emit("removePhone");
        }
    }
}
</script>

<style>

</style>
