<template>
    <div class="login">
        <h2>Login</h2>
        <div class="username-container">
            <label for="username">Username</label>
            <input type="text" v-model="username" @keyup="setUsername">
        </div>
        <div class="password-container">
            <label for="password">Password</label>
            <input type="password" v-model="password" @keyup="setPassword">
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data:() =>{
        return{
            username:'',
            password:''
        }
    },
    methods:{
        setUsername(){
            this.$emit('SETUSERNAME', this.username)
        },
        setPassword(){
            this.$emit('SETPASSWORD', this.password)
        }
    }
}
</script>

<style >
    form input{
        padding: 12px 10px;
        margin: 1%;
        width: 100%;
    }
    .username-container label, .password-container label{
        display: block
    }
</style>
