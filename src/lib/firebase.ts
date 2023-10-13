  import { deleteApp, getApp, getApps, initializeApp } from 'firebase/app';
	import { getFirestore ,updateDoc,doc, connectFirestoreEmulator} from 'firebase/firestore';
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

let firebaseApp
  if (!getApps.length){
    firebaseApp = initializeApp(firebaseConfig);
  }
  else {
    firebaseApp = getApp();
    deleteApp(firebaseApp);
    firebaseApp = initializeApp(firebaseConfig);
  }

  export const app = firebaseApp;
	export const db = getFirestore(app);
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
	export const auth = getAuth(app);
	export const storage = getStorage(app);


  export const setUsername = async (name:String) => {
		await updateDoc(doc(db,`users/${auth.currentUser?.uid}`), {
			display_name: `${name}`
		});
	};