import express from "express";
const app = express();
const port = 3000;

app.use('/', (req, res) => res.status(200).send('Snir Yulzari Profile web page'));

app.listen(port, (req, res) => {
	console.log(`Server running on port ${port}.`);
});
