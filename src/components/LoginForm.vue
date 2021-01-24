<template>
  <form @submit.prevent="handelSubmit">
      
      <input type="email" required placeholder="Email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <div class="error">{{error}}  </div>
      <br>
        <button>Login</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import useLogin from '../composables/useLogin'


export default {
    setup(props,context){
        
        const {error , login} = useLogin()
        const email = ref('')
        const password = ref('')
        const handelSubmit = async ()=>{
           await login(email.value,password.value)
           if(!error.value){
               console.log('User logged in')
           //emiting custome enevts
            context.emit('login')

           }

        }


    return{email,password,handelSubmit,error}

    }
}
</script>

<style>

</style>