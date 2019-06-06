<template>
  <div id="app">
    <div id="nav-container">
      <img class="nav-icon" src="http://iconshow.me/media/images/ui/slim-square-icons/png/512/nav.png" @click="setShowNav" />
     <router-link to="/winkelwagen"> <img class="nav-icon right" src="https://image.flaticon.com/icons/svg/2/2772.svg" alt=""> </router-link>
      <div id="nav-wrapper" :class="{ 'nav-visibility': showNav }">
        <div id="nav">
          <router-link to="/">Home</router-link> 
          <router-link to="/about">About</router-link>
          <router-link to="/products">Products</router-link>
        </div>
      </div>
    </div>  
    <router-view/>
    <footer>
      <p>&copy;Ahmed Benhajar|Publication without the author's permission is prohibited by law </p>
    </footer>
  </div>
</template>

<script>
export default {
    data:() =>{
      return{
        showNav:false
      }
    },
    methods:{
      setShowNav(){
        if(this.showNav === false){
          this.showNav = true;
        }else{
          this.showNav = false;
        }
      }
    }
}
</script>

<style>
*{
  margin: 0;
}
body{
  height:-webkit-fill-available;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
#nav-container {
    background-color: #c0cbb7;
    width: 100%;
    top: 0;
    position: sticky;
    text-align: left;
}
.nav-icon{
  width:50px;
  right: 0;
  cursor:pointer;
}
.right{
  float: right;
  margin-right: 1%;   
}
#nav {
    display: grid;
    grid-template-columns: repeat(33%); 
}

#nav-wrapper{
  max-height: 0;
  display: none;
}

.nav-visibility{
  visibility: visible  !important;
  display: block !important;
  max-height: 100% !important;
  transition: max-height 100000s;

}
#nav a {
  font-weight: 800;
  color: white;
  padding: 1.5% 0;
  text-align: center;
  cursor:pointer;
  text-decoration: none;
  border-bottom: 1px solid lightgray;
}
#nav a:hover {
  background-color: #fee2c3 ;
}
#nav a.router-link-exact-active {
  color: #fbff00;
}
footer {
  width:100%;
  height: 100px;
  background-color:#c0cbb7;
  bottom:auto;
  font-weight: bold;
  line-height:100px;
}
</style>
