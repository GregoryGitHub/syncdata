const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  Name:{type:String},
  Data:{type: Array}
},{collection:"Test"})
module.exports = mongoose.model("Test",Schema)
