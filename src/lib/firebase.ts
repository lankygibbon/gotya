  import { deleteApp, getApp, getApps, initializeApp } from 'firebase/app';
	import { getFirestore ,updateDoc,doc, connectFirestoreEmulator} from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { getStorage } from 'firebase/storage';
  import {firebaseConfig} from '$lib/secrets/firebaseConfig';

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
  //connectFirestoreEmulator(db, '127.0.0.1', 8080);
	export const auth = getAuth(app);
	export const storage = getStorage(app);


  export const setUsername = async (name:String) => {
		await updateDoc(doc(db,`users/${auth.currentUser?.uid}`), {
			display_name: `${name}`
		});
	};