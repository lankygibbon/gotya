import {
	initializeTestEnvironment,
	assertSucceeds,
	assertFails    
} from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import * as assert from 'assert';


const PROJECT_ID = 'gotya-150d8';

const myId = "user_abc";
const myUserData = {uid:'User ABC',email: 'ABC@test.com'};
const theirId = "user_xyz";
const theirUserData = {uid:'User XYZ',email: 'XYZ@test.com'};

describe("Firestore Rules", () => {
    let testEnv = null;
    let myUser = null;
    let theirUser = null;
    let noUser = null;

    before(async () => {
        testEnv = await initializeTestEnvironment({
            projectId: PROJECT_ID,
            firestore:{
                host:"localhost",
                port:8080,
            }
        });

        //clean datastore
        await testEnv.clearFirestore();

        //inital users
        await testEnv.withSecurityRulesDisabled((context) => {
            return context.firestore().collection('users').doc(myId).set(myUserData);
        });
        await testEnv.withSecurityRulesDisabled((context) =>{
            return context.firestore().collection('users').doc(theirId).set(theirUserData);
        });

    })

    beforeEach(async ()=>{
        myUser = testEnv.authenticatedContext(myId);
        theirUser = testEnv.authenticatedContext(theirId);
        noUser = testEnv.unauthenticatedContext();
    })

    

    it("Users: Public user cannot read any user", async () => {
        const doc = noUser.firestore().collection('users').doc(myId);
        await assertFails(doc.get());
    })

    after(async () => {
        await testEnv.cleanup();
    })
    
})


describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});