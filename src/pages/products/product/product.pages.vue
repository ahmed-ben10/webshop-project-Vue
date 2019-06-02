<template>
    <div id="product">
        <div id="product-container">
            <div id="image-container">
                <img :src="products[this.$route.params.id].img" alt="">
            </div>
            <div id="content-container">
                <info :products="products" :inStock="inStock"/>
                <specs :products="products" />
                <cartButtons  :products="products" :aantal="aantal" @orderPhone="orderPhone" @removePhone="removePhone"/>
                <h3 id="price"> &euro;{{products[this.$route.params.id].price}}</h3>    
                <p id="inTotal"> In total: &euro;{{inTotal}}</p>  
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import info from './components/info.components.vue';
import specs from "./components/specs.components.vue";
import cartButtons from './components/cart_buttons.components.vue';


export default {
    name:"product",
    components:{
        info,
        specs,
        cartButtons
    },
    data:()=>{
        return{
            winkelwagen: [],
            aantal:0
        }
    },
    methods:{
        orderPhone(){
              this.winkelwagen.push(this.products[this.$route.params.id]);    
              this.aantal++;                                                                                                                                                                                                                                                                                                      
        },
        removePhone(){
            if(this.winkelwagen.length >0){
                this.winkelwagen.pop();  
                this.aantal--;                                                                                                                                                                                                                                                                                                      
            }
        }
    },
    computed:{
       ...mapState([
        'products'
        ]),
        inStock:function(){
            if(this.products[this.$route.params.id].stock){
                return "In stock";
            } else{
                return "Out of stock";
            }
        },
        inTotal:function(){
            var totaal = this.aantal*this.products[this.$route.params.id].price;
            return totaal.toFixed(2);
        }
    },
    destroyed(){
      this.$parent.showNav =false;
    }
}
</script>

<style>
    #product{
        margin-bottom: 1%;
    }
    #product-container{
        display: grid;
        width:80%;
        margin-top: 1% !important; 
        margin: auto;
        grid-template-columns: 50% 50%;
    }
    #image-container{
        border:1px solid gray; 
        margin-right: 2rem;
    }
    #image-container img{
        width: 100%;
    }
    #info-container h2 {
        font-weight: 900;
        padding: 1rem;
        text-align: left;
    }
    #specs-container h4 {
        font-weight: 900;
        padding: 1rem;
        text-align: left;
        background-color: #fee2c3;
    }
    #in-stock p{
        text-align: left;
        margin:1rem 0;
    }
    #specs{
        list-style-type: none;
        text-align: left;
        font-weight: 100;
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
        text-align: left;
    }
    #setToCart{
        display:grid;
        grid-template-columns: 50% 50%;
        grid-gap: 1rem;
    }
    #setToCart button{
        padding:1rem;
        border:none;
        border-radius: 1rem;
        outline:none;
        cursor: pointer;
        color: white;
        font-weight: 900;
    }
    #addToCart{
        background-color:rgb(75, 110, 45);
    }
    #removeFromCart{
        background-color: lightcoral;
    }
    .disabledButton{
        background-color: lightgray !important;
        cursor:not-allowed !important;
    }
    #inTotal{
        font-size: 50pt;
        text-align: left;
    }
</style>
