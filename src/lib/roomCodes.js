import {firestore} from '$lib/firebase'
import { doc,collection, getDocs ,getDoc} from 'firebase/firestore';


export const checkCode = async (runCount = 0) => {
    let code = 'LV1245';
    const docRef = doc(firestore, 'roomCodes', code);
    const docSnap = await getDoc(docRef);

  if (docSnap.exists() && runCount <= 10) {
    console.log(`Document data already exists ${runCount}`);
    checkCode(runCount + 1);
  } else {
    console.log('No such document! with ', code);
  }
};