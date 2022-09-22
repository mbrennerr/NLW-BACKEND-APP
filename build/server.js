import express from 'express';
const PORT = 3001;
const app = express();
app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, title: 'Ad 1' },
        { id: 2, title: 'Ad 2' },
        { id: 3, title: 'Ad 3' },
        { id: 4, title: 'Ad 4' },
        { id: 5, title: 'Ad 5' },
    ]);
});
app.listen(PORT);
