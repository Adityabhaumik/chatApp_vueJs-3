<template>
  <nav v-if="user">
      <div>
          <p>Hey there ...{{user.displayName}}</p>
          <p class="email">Currently Logged in as {{user.email}}</p>
      </div>
      <button @click="handelClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout.js'
import getUser from '../composables/getUser.js'


export default {

    setup() {


        const {error,logout} = useLogout()
        const {user} = getUser()
        const handelClick= async()=>{
           
            await logout()
            if(!error.value){
                console.log('User logged out')
               
            }
          
        }


        return {handelClick ,user}
    }

        
        }
</script>

<style>

</style>