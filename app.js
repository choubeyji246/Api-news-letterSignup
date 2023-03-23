const express=require("express");
const bodyParser=require("body-parser");
// const request=require("request")
const app=express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
res.sendFile(__dirname + "/signup.html")
})

app.post("/",function(req,res){
    res.write(req.body.N1);
    res.write(req.body.N2)
    res.write(req.body.mail);
    res.send()
})

app.post("/",function(req,res){

})



app.listen(3000,function(){
    console.log("server started running at port 3000")
})




// api key: 504a6f8821ccb283f5ceb5ae78a0cbcc-us21

//list id: