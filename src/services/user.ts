import { firestore } from '../app'; //, fieldValue
import { User, collection } from '../models/user';
import * as yup from 'yup';

async function registerUser(user: User) {
	const userDetails = { photos: user.photos, code: user.code };
	const userRef = firestore.collection(collection).doc(user.username);
	await userRef.set(userDetails).then((result: any) => {
		console.log(`Document written at: ${result.writeTime.toDate()}`);
	});
}

async function deleteUser(username: string) {
	const userRef = firestore.collection(collection).doc(username);
	// await userRef.update({
	// 	photos: fieldValue.delete(),
	// 	code: fieldValue.delete(),
	// });
	await userRef.delete().then((result: any) => {
		console.log(`Document deleted at: ${result.writeTime.toDate()}`);
	});
}

export { registerUser, deleteUser };
