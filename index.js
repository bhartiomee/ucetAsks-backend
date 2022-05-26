const express=require('express');
const app=express();

const server_port=process.env.SERVER_PORT||5000;

//creating server port
app.listen(server_port,async()=>{
  console.log(`Server runing at port ${server_port}`);
})
