import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {res.send('Hello this is a GET REQUEST!')})
app.post('/', (req, res) => {res.send('Hello this is a post REQUEST!')})
app.put('/', (req, res) => {res.send('Hello this is a put REQUEST!')})
app.delete('/', (req, res) => {res.send('Hello this is a delete REQUEST!')})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})