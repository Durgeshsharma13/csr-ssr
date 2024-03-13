
const { log } = require('console');
const express=require('express');
const app=express();
const path=require('path')

let todos =["go to gym ","come back home ","padhai krlo paper hai "]

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.use(express.static(path.join(__dirname,'public')));
app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))


//create an API
app.get('/todos',(req,res)=>{
    res.json(todos)    //json->data is sent in the form of json
})

app.post('/todos',(req,res)=>{
    //console.log(req.body);
    let{todo}=req.body;

    todos.push(todo);
    res.json({msg:"post req chl gyi meri"})
    
})



app.listen(8082,()=>{
    console.log("server connected at port 8082");
})