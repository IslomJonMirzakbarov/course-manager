import { Application, Request, Response } from "express";

const express = require('express');

// init app & middleware
const app: Application = express();

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});

// routes
app.get('/books', (req: Request, res: Response) => {
  res.json({msg: 'hi node and mongodb!'});
})
