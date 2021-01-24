<template>
  <div class="welcome container">
      <h5>Welcome</h5>
      <div v-if="showLogin">
         <p>Login</p>
           <LoginForm @login="enterChat"/>
           <p>No account yet :( <br><br><span @click="showLogin=false" class="span-login">Sign Up </span> instead :)</p>
      </div >
      <div  v-else>
         <p>Sign Up</p>
        <SignupForm @signUp="enterChat"/>
        <p>Already Registered<span @click="showLogin=true" class="span-login"> Login</span></p>
      </div>
     
      
      
    
  </div>
</template>

<script>

import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import {useRouter} from 'vue-router'

export default {
  components: { SignupForm ,LoginForm},
  setup(){
    const router =useRouter() 
    const showLogin = ref(true)
    const enterChat =() =>{
      router.push({name:'Chatroom'})

    }




    return{showLogin,enterChat}
  }




}
</script>

<style>

  .span-login{
    font-weight:bold ;
    color: rgb(30, 44, 243);
    cursor: pointer;
  }

 .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid rgb(66, 61, 61);
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  button {
    cursor: pointer;
  }
</style>