
import express from 'express';
import {ENV} from './lib/env.js';
import path from 'path';
import { connectDB } from './lib/db.js';

const app=express();
const PORT = ENV.PORT||3000;
const DB_URL=ENV.DB_URL;

const __dirname = path.resolve();

app.get('/books',(req,res)=>{
    res.status(200).json({msg:"this is the books endpoint"});
});

//make app ready for deployment
if(ENV.NODE_ENV==='production')
{
    app.use(express.static(path.join(__dirname,'../frontend/dist')));
    app.get('/{*any}',(req,res)=>{
        res.sendFile(path.join(__dirname,'../frontend/dist/index.html'));
    })
}

const startServer = async()=>
{
    try
    {
    await connectDB();
    app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT);
}); 
    }
    catch(error)
    {
        console.log('error starting server',error);
        process.exit(1);
    }
}

startServer();