import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_reKJaGEUEzwxDNqVlzUSKBu_CNX05X0",
    authDomain: "vue-blog-system-f85ff.firebaseapp.com",
    projectId: "vue-blog-system-f85ff",
    storageBucket: "vue-blog-system-f85ff.appspot.com",
    messagingSenderId: "1001081470253",
    appId: "1:1001081470253:web:2a0b07f728a6b297d067a4"
  };
  firebase.initializeApp(firebaseConfig)
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;
  
  export {db , timestamp , auth}