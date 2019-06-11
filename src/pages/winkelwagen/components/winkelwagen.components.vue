<template>
    <table id="winkelwagen">
        <thead>
            <th></th>
            <th>Description</th>
            <th>Number</th>
            <th>Price</th>
        </thead>
        <tbody>
            <tr v-for="(product,index) in winkelwagen" :key="index">
                <td><img :src="product.img" alt="phone image" id="albumimage"></td>
                <td>{{product.name}}</td>
                <td> <input type="number"  id="selectNumber"  v-model="product.aantal" min="0" max="10"> </td>
                <td>&euro;{{inTotal(product)}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name:'winkelwagen',
    props:{
        winkelwagen:{
            type:null,
            required:false
        }
    },
    methods:{
        inTotal(product){
            var totaal= product.aantal*product.price;
            return totaal.toFixed(2)
        },
        checkNumber(number){
            if(number<=0){
                return number=0;
                console.log('check the data right  now')
            }
        }
    }
}
</script>

<style>

</style>
