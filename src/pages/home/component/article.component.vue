<template>
    <div id="webshop-article">
        <div id="article-container">
            <article v-for="(product,key) in products.slice(0,4)" :key="key">
                <h2>{{product.name}}</h2>
                <img :src="product.img" :alt="product.name" >
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
    }
}
</script>

<style>
    #webshop-article{

    }
    #article-container{
        display: grid;
        grid-template-columns:50% 50%;
        grid-gap: 1em;
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
