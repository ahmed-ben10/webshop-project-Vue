<template>
    <div id="product">
        <div id="product-container">
            <div id="image-container">
                <img :src="products[this.$route.params.id].img" alt="">
            </div>
            <div id="content-container">
                <info :products="products" :inStock="inStock"/>
                <specs :products="products" />
                <cartButtons  :products="products" :aantal="aantal" @updateQuantity="updateQuantity1"/>
                <div id="money-diplay">
                    <h3 id="price"> &euro;{{products[this.$route.params.id].price}}</h3>    
                    <p id="inTotal"> In total: &euro;{{inTotal}}</p>  
                </div>
                <orderButton @updateCart="updateCart" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, Store } from "vuex";
import info from './components/info.components.vue';
import specs from "./components/specs.components.vue";
import cartButtons from './components/cart_buttons.components.vue';
import orderButton from './components/orderButton.components.vue';

export default {
    name:"product",
    components:{
        info,
        specs,
        cartButtons,
        orderButton
    },
    data:()=>{
        return{
            winkelwagen: [],
            aantal:0,  
        }
    },
    methods:{
        ...mapMutations([
            'ADD_TO_CART'
        ]),
        updateQuantity1(quantity){
            this.aantal= quantity;
        },
        updateCart(){
                // this.ADD_TO_CART(this.products[this.$route.params.id]);
            for(var i=0; i< this.aantal;i++){
                this.$store.commit("ADD_TO_CART",this.products[this.$route.params.id]);
            }
            this.aantal=0;
            this.$children[2].Aantal=0;
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
        margin-right: 2rem;
    }
    #image-container img{
        width: 100%;
        border:1px solid gray; 
    }
    #info-container h2 {
        font-weight: 900;
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
     #specs-container{
         margin-bottom: 2%;
     }
    #setCart{
        width: 100%;
        text-align: center;
        padding: 1rem 0 1rem 0;
    }
    .disabledButton{
        background-color: lightgray !important;
        cursor:not-allowed !important;
    }
    #price{
        font-size: 50pt;
        text-align: left;
    }
    #inTotal{
        font-size: 50pt;
        text-align: left;
    }
    #order-button{
        padding: 1rem;
        background-color:#869c73;
        font-weight: 900;
        width: 50%;
        border-radius:20px;
        border: gray solid 1pt;
    }
    #order-button:hover{
        cursor: pointer;
        background-color: #c0cbb7;
    }
</style>
