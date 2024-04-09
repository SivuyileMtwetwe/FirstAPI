const express = require("express")
const mongoose = require("mongoose")
const app = express()


app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to my first api")
})

app.get("/search",(req, res)=>{


    const target = req.body.num;

    const arr = [ 6, 7, 4 , 8, 8, 12, 3, 4, 60, 40, 200, 39]

    for(i = 0; i < arr.length; i++){
        if(arr[i]== target){
            return res.status(200).send(target + "found @ index " + i);
        }
    }

return res.status(300).send(target + "not found ");
})

mongoose.connect('mongodb://127.0.0.1:27017/mydb').then(()=> {
    console.log("Connected to database")
})

app.listen(6000,() => {
    console.log("Server running @");
})