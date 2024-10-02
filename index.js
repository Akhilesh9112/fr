const express= require("express");
const app= express();

let port=8080;
app.set("view engine","ejs");
app.listen(port,()=>{
    console.log(`app  listening on this port ${port}`);
});

/*app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("no search query");
    }
    res.send(`these are the results for :${q}`);
});*/


/*app.get("/rolldice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1;
    res.render("home.ejs",{b:num});
});*/

app.get("/ig/:username",(req,res)=>{
    const followers=["adam","bob","aman","ram"];
    let {username}=req.params;

    res.render("home.ejs",{username,followers});
});