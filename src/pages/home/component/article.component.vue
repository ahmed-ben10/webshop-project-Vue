<template>
    <div id="webshop-article">
        <div id="article-container">
            <article v-for="(product,key) in products.slice(0,5)" :key="key" @click="goProductPage(product,key)">
                <h2>{{product.name}}</h2>
                <img :src="product.img" :alt="product.name"  >
            </article>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name:'article-component',
    computed:{
       ...mapState([
           'products'
        ])
    },
    methods:{
        goProductPage(product,index){
            this.$router.push('/products/'+index) 
        }
        
    },
}
</script>

<style>
    #webshop-article{

    }
    #article-container{
        display: grid;
        grid-template-columns:50% 50%;
        grid-gap: 1em;
        cursor: pointer;
    }

    #article-container article{
        padding: 1em;
        border-radius:5px;
        background-color: #ffa0cf;
    }

    #article-container article img{
        width:80%;
        padding: 1em;
    }
</style>
