import firebase from 'firebase'

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
