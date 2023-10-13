import {
	initializeTestEnvironment,
	assertSucceeds,
	assertFails
} from '@firebase/rules-unit-testing';
import { beforeAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import * as assert from 'assert';

const PROJECT_ID = 'gotya-150d8';

let firebase;

const getFirebase = async () => {
	return await initializeTestEnvironment({
		projectId: PROJECT_ID,
		firestore: { host: 'localhost', port: 8080 }
	});
};

const getFirestore = (context) => {
    return context.firestore();
}

beforeEach(async () => {
    firebase = await getFirebase();
})

describe("App", () => {
    it("Should be the case 2 + 2 = 4", async () => {
        assertSucceeds(true);
    })
})

describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });
  });