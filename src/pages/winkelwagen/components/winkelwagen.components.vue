<template>
    <table id="winkelwagen">
        <thead>
            <th></th>
            <th>Description</th>
            <th>Number</th>
            <th>Price</th>
        </thead>
        <tbody>
            <tr v-for="(winkelwagen,index) in winkelwagen" :key="index">
                <td><img :src="winkelwagen.img" alt="phone image" id="albumimage"></td>
                <td>{{winkelwagen.name}}</td>
                <td> <input type="number"  id="selectNumber"> </td>
                <td>{{inTotal}}</td>
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
    }
}
</script>

<style>

</style>
