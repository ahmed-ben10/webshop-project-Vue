<template>
    <div id="product-container">
        <h2>Product</h2>
    </div>
</template>

<script>
import { maspState } from 'vuex';
export default {
    computed:{
        ...maspState([
            'products'
        ]),
    },
    destroyed(){
      this.$parent.showNav =false;
    }
}
</script>

<style>

</style>
