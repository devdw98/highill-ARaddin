import express from 'express';

// Create Express server
const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

export default app;
