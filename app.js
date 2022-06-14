const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine","ejs");

let items=["Buy Food","Cook Food","Eat Food"];
app.get("/",function(req,res){
    let date=new Date();
     let options={
        weekday:"long",
        day:"numeric",
        month: "long",
     };
     console.log(date.toLocaleDateString("us-en",options));
     let day="";
     day=date.toLocaleDateString("us-en",options);
     res.render("list",{listTitle: day, kindOfItems: items});

});
app.post("/",function(req,res){
    let a=req.body.num;
    items.push(a);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("The Server is running at port 3000");
});