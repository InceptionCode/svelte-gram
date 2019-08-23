import * as firebase from 'firebase/app'
import * as firestore from 'firebase/firestore'
import * as auth from 'firebase/auth'

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
  db: firestore(),
  auth: auth(),
  fb: firestore
}
