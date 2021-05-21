const express = require('express')
const {gzip, ungzip} = require('node-gzip'); 
const fs = require('fs'); 
const path = require('path')
const app = express()
const port = 3002

const mongoose = require('mongoose');

const model = require('./model.js')

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}).then(res=>{
  console.log('Conectado',res)
}).catch(err=>{
  console.log('Deu caca',err)
});



app.get('/', async (req, res) => {

  const d = await model.find({});

  res.send(d)
})

app.get('/zip', async (req, res) => {
  try{
    console.log('recebido')
    const data = fs.readFileSync(path.join(__dirname,'refdata.js'),'utf8')
    const compressed = await gzip(data);
    console.log(compressed.toJSON());
    res.send({totalPages:3,data:compressed})
    //res.send(compressed)
  }catch(err){
    res.send(err.message)
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})