// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app'

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: 'svelte-gram',
  storageBucket: '',
  messagingSenderId: process.env.MESSAGING_SENDERID,
  appId: process.env.APPID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const Firestore = {
  rootStore: null,
  db: firebase.firestore(),
  auth: firebase.auth(),
  fb: firebase.firestore
}
