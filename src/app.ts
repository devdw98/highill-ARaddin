import express from 'express';
import { initialFirebase } from './config/firebaseConfig';

import { userRouter } from './controllers/user';

// Create Express server
const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

// firebase connection & use firestore
export const firestore = initialFirebase().get('firestore');
// export const fieldValue = initialFirebase().get('fieldValue');

app.use('/api/user', userRouter);

export default app;
