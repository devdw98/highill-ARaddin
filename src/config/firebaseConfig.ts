import * as admin from 'firebase-admin';
import { serviceAccount } from './firebase/firebaseServiceAccount';

export function initialFirebase() {
	const config = {
		credential: admin.credential.cert(serviceAccount),
	};
	const firebase = admin.initializeApp(config);
	console.log(
		`firebase initial: ${firebase.options.credential === config.credential}`
	);
	const firebases = new Map();
	firebases.set('firestore', admin.firestore());
	// firebases.set('fieldValue', admin.firestore.FieldValue);
	// return admin.firestore();
	return firebases;
}
