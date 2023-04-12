import express from 'express';

const PORT = process.env.PORT || 3000;

const server = express();

server.get('/' , (req, res) => {
  res.send('<h1>Hello</h1>');
})

server.listen(PORT, () => console.log(`listening on ${PORT}...`));
