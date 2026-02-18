
import express from 'express';
import {ENV} from './lib/env.js';

const app=express();
const PORT = ENV.PORT||3000;
const DB_URL=ENV.DB_URL;
app.get('/health',(req,res)=>{
    res.status(200).json({msg:"api running 7"});
});

app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT);
});