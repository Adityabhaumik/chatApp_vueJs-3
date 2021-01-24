import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import {projectAuth} from '../firebase/config'
import { nextTick } from 'vue'

//route gurd 

const requireAuth = (__to,__from,next) =>{

  let user = projectAuth.currentUser
  //console.log('auth gurd ' ,user)
  if(!user){
    next({name:'Welcome'})
  }else{
    next()
  }
 
}


const reuireNoAuth = (__to,__from,next) =>{

  let user = projectAuth.currentUser
  //console.log('auth gurd ' ,user)
  if(user){
    next({name:'Chatroom'})
  }else{
    next()
  }
 
}



const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter:reuireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
