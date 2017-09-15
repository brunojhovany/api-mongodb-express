const mongoose = require('mongoose');
const config = require('../config');
let db;

module.exports = function connection(){
  if (!db){
    db = mongoose.connect(config.db,{useMongoClient: true},(err, res)=>{
      if (err){
        return console.log(`Error to connect with db: ${err}`);
      }
      console.log(`connection to db success`);

    });
  }
  return db;
};
