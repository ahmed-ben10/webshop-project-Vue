<template>
    <div class="register">
        <h2>Register</h2>
        <div class="first-name-register">
            <label for="firstname">First name</label>
            <input type="text" v-model="firstname">
        </div>
        <div class="last-name-register">
            <label for="lastname">Last name</label>
            <input type="name" v-model="lastname">
        </div>
        <div class="username-register">
            <label for="username">Username</label>
            <input type="text" v-model="username">
        </div>
        <div class="password-register">
            <label for="password">Password</label>
            <input type="password" v-model="password">
        </div>
    </div>
</template>

<script>
export default {
    name:'register',
    data: () => {
        return {
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        }
    }
}
</script>

<style>

</style>
