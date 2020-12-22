const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')

const User = require('./Schema')
const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
const config = require('./config')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose')
const { db } =require('./Schema')
const authenticate = require('./authController')
const isAuthenticated = require("./authenticate")
const auth = require("./auth")



mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to Database'))
    .catch(err => console.log(err.message))


// const uri = process.env.MONGODB_CONNECTION_STRING;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log('Connected to Database')
//   // perform actions on the collection object
//   client.close();
// });

// db.on('error', (err) =>{
//     console.log(err)
// })

// db.once('open', () => {
//     console.log('Database Connection Established')
// })

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname,"..","my-app","public")));
app.use('/signup', authenticate)
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
//     next();
//   });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"..","my-app","public","index.html"))
    
})

app.post("/signup", authenticate)


// app.get("/users", (req, res) => {

// })
router.post("/login", isAuthenticated)

app.get("/login", (req, res) => {
    res.send("hi")
})
app.get("/user", auth, async (req, res) => {
    try {
// request.user is getting fetched from Middleware after token authentication

        const user = await User.findById(req.user.id)

        res.json(user)
    } catch(err) {
        res.send({message: err})
    }
})

   app.listen(8080, () => console.log('server started'))


   