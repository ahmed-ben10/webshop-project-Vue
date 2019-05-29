<template>
    <div id="home">
        <header>
            <img class="bigimage"  src="http://locatieonafhankelijkwerk.nl/wp-content/uploads/2017/01/Website.png" alt="bigimage" >
        </header>
        <main>
            <webshopArticle />
        </main>
    </div>
</template>


<script>
import webshopArticle from './component/article.component.vue';
import AppVue from '../../App.vue';
export default {
    components:{
        webshopArticle
    },
    destroyed(){
      this.$parent.showNav =false;
    }
}
</script>

<style>
    .bigimage{
        width: 100%;
        height: 93.5vh;
    }
    main{
        width: 900px;
        padding:1%;
        margin: auto;
    }
</style>