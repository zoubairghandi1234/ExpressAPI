//import
const Joi = require('joi')
const express = require("express");
// const mongoose = require("mongoose");
// const CustomersModel = require("./models/Ccustomers");
const app = express();
const cors = require("cors")
const { MongoClient } = require('mongodb');
app.use(cors())
app.use(express.json())



//data
const url = "mongodb+srv://xxx:yyy@cluster0.lkstxza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const courses =[
    {id:1 , name:"cours laravel"},
    {id:2 , name:"cours php"},
    {id:3 , name:"cours react"},
]

/// database

// mongoose.connect(url,)
const client = new MongoClient(url);
const dbName = 'sample_analytics';

client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection('customers');
//const findResult = await collection.find({}).toArray();
// the following code examples can be pasted here...



/// les routes
app.get('/',(req,res)=>{
    res.send("hello wold ana zoubair ghandi ")
});

app.get('/test',(req,res)=>{
    res.send([1,3,4])
});

app.get('/consst',async(req,res)=>{
    const findResult = await collection.find({}).toArray();
    res.send(findResult)
});

// app.get('/custumers',async(req,res)=>{
//     CustomersModel.find()
//     .then(c=>res.json(c))
//     .catch(err=>res.json(err))
// });

// app.get('/api/cours/:id/:name',(req,res)=>{
//     res.send(req.params)// object
// });

// app.get('/api/courses/:id',(req,res)=>{
//     res.send(req.query)
// });



const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listing to port ${port}`))



