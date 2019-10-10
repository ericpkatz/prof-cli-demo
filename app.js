const express = require('express');
const db = require('./db');
const { Thing } = db.models;

const app = express();

app.get('/', async(req, res, next)=> {
  try {
    const foo = await Thing.findOne({ where: { name: 'foo'}});
    res.send(foo.name);
  }
  catch(ex){
    next(ex);
  }

}); 

module.exports = app;
