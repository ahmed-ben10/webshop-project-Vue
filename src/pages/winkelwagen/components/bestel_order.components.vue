<template>
    <div id="bestel-total"> 
        <h2 id="total-container">Total:{{subTotal()}}<h3 id="total"></h3></h2>
        <button id="bestellen" @click="order">Order</button>
     </div>
</template>

<script>
export default {
name:'bestel-order',
props:{
    winkelwagen:{
        type:null,
        required:false
    }
},
methods:{
    subTotal(){
        var totaal = 0;
        for (let i = 0; i <  this.winkelwagen.length; i++) {
            totaal+=this.winkelwagen[i].price* this.winkelwagen[i].aantal; 
        }
        return totaal.toFixed(2);
    },
    order(){
        
    }
}

}
</script>

<style>

</style>
