import {ref} from 'vue'
import {projectAuth} from '../firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged((_user) =>{

    user.value = _user
    //console.log("this is the output :",_user)

})


const getUser =() =>{
    return {user}
}

export default getUser