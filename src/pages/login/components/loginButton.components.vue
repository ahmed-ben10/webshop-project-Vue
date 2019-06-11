<template>
    <div class="login-button-container">
        <input type="submit" value="Login" @click="emitLogin">
        <input type="submit" value="Register" @click="emitRegister">
    </div>
</template>

<script>
export default {
    name:'loginButton',
    data:() =>{
        return{}
    },
    methods:{
        emitLogin(){    
            this.$emit('EMITLOGIN')
        },
        emitRegister(){    
            this.$emit('EMITREGISTER')
        }
    }
}
</script>

<style>

</style>
