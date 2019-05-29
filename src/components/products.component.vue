<template>
    <div id="product">
        <div id="product-container">
            <div id="image-container">
                <img :src="products[this.$route.params.id].img" alt="">
            </div>
            <div id="specs-container">
                <h2>{{products[this.$route.params.id].name}}</h2>
                <ul id="specs">
                    <li>Android: {{products[this.$route.params.id].android}}</li>
                    <li>Scherm: {{products[this.$route.params.id].scherm}}</li>
                    <li>Camera: {{products[this.$route.params.id].camera}}</li>
                    <li>Schermtype: {{products[this.$route.params.id].schermType}}</li>
                    <li>Resolutie: {{products[this.$route.params.id].resolutie}}</li>
                </ul>
                    <h3 id="price"> &euro;{{products[this.$route.params.id].price}}</h3>
            </div>
        </div>
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
    #product-container{
        display: grid;
        width:50%;
        margin-top: 1% !important; 
        margin: auto;
        grid-template-columns: 50% 50%;
    }
    #image-container, #specs-container{
        border:1px solid gray; 
    }
    #image-container img{
        width: 100%;
    }
    #specs-container h2 {
        font-weight: 900;
        padding: 1rem;
        border-bottom: 1px solid gray;
        background-color: #fee2c3;
    }
    #specs{
        list-style-type: none;
        text-align: left;
        font-weight: 900;
        padding-left:0; 
    }
    #specs li{
        padding: 1rem;
        background-color: #a4ae9c;
    }
    #specs li:nth-child(odd){
        padding: 1rem;
        background-color: #c0cbb7;
    }
    #price{
        font-size: 50pt;
    }
</style>
