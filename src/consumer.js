const {ungzip} = require('node-gzip'); 
const fetch = require('node-fetch');

async function run(){
  const response = await fetch('http://localhost:3002/zip');
  console.log(response);
  const content = await response.text();
  const {data: bufferArray, totalPages} = JSON.parse(content);
  
  const b = Buffer.from(bufferArray)
  const d = await ungzip(b);
  console.log(totalPages,JSON.parse(d.toString()));

}
run();


