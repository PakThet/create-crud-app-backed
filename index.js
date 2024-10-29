
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require("./model/product");
const prodouctRoutes = require("./router/product.route")

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

// routes
app.use('/api/products', prodouctRoutes);




app.get('/',(req,res)=>{
    res.send("Hello from Node API");
});





mongoose.connect("mongodb+srv://coffeshop:Vj5IdzsNdh1Y4Nr2@backeddatabase.1p2db.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backeddatabase")
.then(()=>{
    console.log("Connected to database");
})
.catch(()=>{
    console.log("Connected failed");
});