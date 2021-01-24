import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  //get config from firebase
  
  };


  //init firebase

  firebase.initializeApp(firebaseConfig)

  const projcetFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projcetFirestore,timestamp,projectAuth}