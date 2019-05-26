<template>
    <div id="home">
        <header>
            <img class="bigimage"  src="https://3wga6448744j404mpt11pbx4-wpengine.netdna-ssl.com/wp-content/uploads/2013/02/blog_css1.jpg" alt="bigimage" >
        </header>
        <main>
            <webshopArticle />
        </main>
    </div>
</template>


<script>
import webshopArticle from './component/article.component.vue';
export default {
    components:{
        webshopArticle
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