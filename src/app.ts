import express from 'express';
import { initialFirebase } from './config/firebaseConfig';

// Create Express server
const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

// firebase connection & use firestore
export const firestore = initialFirebase();

export default app;
