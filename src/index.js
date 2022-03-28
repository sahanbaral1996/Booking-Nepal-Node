import express from "express";

const expressApp = express();

expressApp.get('/', (req, res) => {
  res.send({ hi: 'there' });
})

const PORT = process.env.PORT || 5000;

expressApp.listen(5000);