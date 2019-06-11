<template>
  <div class="login-container">
      <form  @submit.prevent="clickedOnRegister()" v-if="!clickedOnRegister">
        <Login @SETUSERNAME='setUsername' @SETPASSWORD='setPassword'/>
        <LoginButton @EMITLOGIN="login" @EMITREGISTER="register"/>
      </form>
      <form @submit.prevent="" v-if="clickedOnRegister">
        <Register />
        <RegisterButton />
      </form>
  </div>  
</template>

<script>
import Login from './components/login.components.vue';
import LoginButton from './components/loginButton.components.vue';
import Register from './components/register.components.vue';
import RegisterButton from './components/registerButton.components.vue';

export default {
  components:{
    Login,
    LoginButton,
    Register,
    RegisterButton
  },
  data:() => {
    return{
      username: '',
      password:'',
      clickedOnRegister:false
    }
  },
  methods:{
    setUsername(username){
      this.username=username;
    },
    setPassword(password){
      this.password=password;
    },
    login(){
      
    },
    register(){
      if(this.clickedOnRegister){
        this.clickedOnRegister= false;
      } else {
        this.clickedOnRegister= true;
      }
    }
  }
}
</script>

<style>
  .login-container{
    width:80%;
    margin:auto;
    padding:1%;
  }
</style>
