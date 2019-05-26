<template>
  <div id="app">
    <div id="nav-container">
      <img id="nav-icon" src="http://iconshow.me/media/images/ui/slim-square-icons/png/512/nav.png" @click="setShowNav" />
      <!-- <div id="nav-wrapper" :style="{display:showNav}"> -->
      <div id="nav-wrapper" :class="{ 'nav-visibility': showNav }">
        <div id="nav">
          <router-link to="/">Home</router-link> 
          <router-link to="/about">About</router-link>
          <router-link to="/products">Products</router-link>
        </div>
      </div>
    </div>  
    <router-view/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav-container {
    background-color: #ffa0cf;
    width: 100%;
    top: 0;
    position: sticky;
    text-align: right;
}
#nav-icon{
  width:50px;
  right: 0;
  cursor:pointer;
}
#nav {
    display: grid;
    grid-template-columns: repeat(33%); 
}

#nav-wrapper{
  max-height: 0;
  opacity: 0;
}

.nav-visibility{
  visibility: visible  !important;
  opacity: 1  !important;
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
  background-color: #00eeff;
}
#nav a.router-link-exact-active {
  color: #fbff00;
}
</style>
