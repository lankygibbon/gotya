import {firestore} from '$lib/firebase'
import { doc,collection, getDocs ,getDoc,addDoc} from 'firebase/firestore';

export const randomCode = () => {
  let code = '';
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const codeLength = 6;

  for (let i = 0; i < codeLength; i++) {
    code += alpha.charAt(Math.floor(Math.random() * alpha.length));
  }

  return code;
};


/**
 * Returns the roomID
 * @returns {Promise<String>} The roomID
 */
export const createRoom = async (runCount = 0) => {
    let code = randomCode();
    //let code = 'LV1245';
    const docRef = doc(firestore, 'roomCodes', code);
    const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(`Document data already exists ${runCount}`)
    if(runCount <= 9){
    return createRoom(runCount + 1);
    }
    else {
      console.log(docSnap.data().room);
      return "unsuccessful";
    }
  } else {
      const newRoomCode = collection(firestore, "roomCodes");
      

    let newRoomRef = await addDoc(collection(firestore, "rooms"), {
      roomCode: code});

      let newRoomSnap = await getDoc(newRoomRef);

    console.log('No such document! with ', (newRoomSnap.id));

    return newRoomSnap.id;
  }
};