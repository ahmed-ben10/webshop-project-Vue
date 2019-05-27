<template>
    <div id="product">
        <h2>{{products[this.$route.params.id].name}}</h2>
        <img :src="products[this.$route.params.id].img" alt="">
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name:"product",
    data:()=>{
        return{
            
        }
    },
    methods:{
        goProductPage(){
                                                                                                                                                                                                                                                                                                                        
        }
    },
    computed:{
       ...mapState([
        'products'
        ])
    },
    destroyed(){
      this.$parent.showNav =false;
    }
}
</script>

<style>

</style>
