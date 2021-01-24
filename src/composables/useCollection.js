import { ref } from "vue"
import {projcetFirestore} from '../firebase/config'

const useCollection = (collection) =>{
    const error = ref(null)

    const addDoc = async(doc) =>{

        error.value = null
        try {
            await projcetFirestore.collection(collection).add(doc)
            
        } catch (err) {
            console.log(err)
            error.value ="could not send error message"
        }


    }

    return {error,addDoc}

}

export default useCollection