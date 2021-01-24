import { ref, watchEffect } from "vue"
import {projcetFirestore} from '../firebase/config'

const getCollection = (collection) =>{
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projcetFirestore.collection(collection).orderBy('createdAt')

   const unsub = collectionRef.onSnapshot(snap =>{
    
        let results =[]
        
        snap.docs.forEach(doc =>{
            
           // doc.data().createdAt && console.log(doc.id)
            doc.data().createdAt && results.push({...doc.data(),id : doc.id})
        })

        
        
        documents.value = results
       
        error.value = null
    },err=>{
        
        documents.value=null
        error.value = 'Failed to fetch data .'
    })

    watchEffect((onInvalidate)=>{
        onInvalidate(() => unsub())
    })



    return {error, documents }

}

export default getCollection