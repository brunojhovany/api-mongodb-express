'use strict'
module.exports = function(){
  let db = require('../lib/db-connection')();
  let Schema = require('mongoose').Schema;

  let Product = Schema({
    name : String,
    picture: String,
    price: Number,
    category: {type: String, enum:['article-cleaning','food','candies','drinks','plastics','milk products','computer']},
    description: String
  });
  return db.model('product',Product);
}
