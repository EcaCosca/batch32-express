import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app
    .route('/')
    .get((req, res) => {res.send('Hello this is a GET REQUEST!')})
    .post((req, res) => {res.send('Hello this is a post REQUEST!')})
    .put((req, res) => {res.send('Hello this is a put REQUEST!')})
    .delete((req, res) => {res.send('Hello this is a delete REQUEST!')});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})