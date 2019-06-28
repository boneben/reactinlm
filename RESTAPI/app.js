const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }

    next();    
})

//body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//routes

const userRoute = require('./routes/users.js');
app.use("/api/users", userRoute);


const customerRoute = require('./routes/customers.js');
app.use("/api/customers", customerRoute);

module.exports = app;