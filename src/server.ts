import express, { Application, Request, Response } from 'express';

const PORT = 3000;

const app: Application = express();

app.get('/games', (req: Request, res: Response) => {
	return res.json([]);
});
app.post('/ads', (req: Request, res: Response) => {
	return res.status(201).json([]);
});
app.get('/ads', (req: Request, res: Response) => {
	return res.json([
		{ id: 1, title: 'Ad 1' },
		{ id: 2, title: 'Ad 2' },
		{ id: 3, title: 'Ad 3' },
		{ id: 4, title: 'Ad 4' },
		{ id: 5, title: 'Ad 5' },
		{ id: 6, title: 'Ad 6' },
	]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
