<template>
    <div id="about">
        <h2>About</h2>
    </div>
</template>

<script>
export default {
    destroyed(){
      this.$parent.showNav =false;
    }
}
</script>

<style>
    
</style>
