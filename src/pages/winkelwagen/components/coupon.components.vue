<template>
    <div id="couponcode">
        <h2>Coupon code</h2>
        <input type="text" v-model="coupon" id="code" placeholder="code" />
        <button id="korting" @click="checkCoupon">click</button>
    </div>
</template>

<script>
export default {
name:'coupon',
    data:() => {
        return{
            coupon:'',
            coupenList:['korting','achy','phone']
        }
    },
    methods:{
        checkCoupon(){
            for (let i = 0; i < this.coupenList.length; i++) {
                if(this.coupon == this.coupenList[i]){
                    alert('KORTING');
                }
            }
        }
    }
}
</script>

<style>

</style>
