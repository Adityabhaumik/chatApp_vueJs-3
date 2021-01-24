import { ref } from "vue"
import {projectAuth} from '../firebase/config'



const error = ref(null)


const login = async (email,password) =>{
    error.value = null
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email,password)
        console.log(res)
        return res
    } catch (err) {
        console.log(err.value)
        error.value = "Invalid"
        
    }

}

const useLogin = () =>{
    return {error ,login}
}


export default useLogin