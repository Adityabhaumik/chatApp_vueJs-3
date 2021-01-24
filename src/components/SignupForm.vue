<template>
  <form @submit.prevent="handelSubmit">
      <input type="text" required placeholder="Display Name" v-model="displayName">
      <input type="email" required placeholder="Email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <div class="error">{{error}}</div>
        <button>Sign Up</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import useSignup from '../composables/useSignup'



export default {
    setup(props,context){
        const {error,signup} =useSignup()    
        const displayName =ref('')
        const email = ref('')
        const password = ref('')
        const handelSubmit = async ()=>{
           await signup(email.value,password.value,displayName.value)
           if(!error.value){
               context.emit('signUp')
           }
         
        }


    return{displayName,email,password,handelSubmit,error}

    }
}
</script>

<style>

</style>