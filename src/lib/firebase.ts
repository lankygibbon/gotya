  import { initializeApp } from 'firebase/app';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCEiVIIF56wKk6fcQORuOeb6nRkP9jRrZk",
    authDomain: "gotya-150d8.firebaseapp.com",
    projectId: "gotya-150d8",
    storageBucket: "gotya-150d8.appspot.com",
    messagingSenderId: "759342163053",
    appId: "1:759342163053:web:0e4a723d45c6c879758b64",
    measurementId: "G-F5PDBSW6SH"
  };

  export const app = initializeApp(firebaseConfig);
	export const firestore = getFirestore(app);
	export const auth = getAuth(app);
	export const storage = getStorage(app);