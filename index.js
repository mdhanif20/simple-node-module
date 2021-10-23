const express = require('express');
var cors = require('cors')
const app = express();
const port = 9898;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello,Mama third repo second.');
})
const users = [
    {id:0,name:"Mohammd hanif",email:"mdhanif115825@gmaill.com"},
    {id:1,name:"Mohammd Hizbulla",email:"hizbulla765825@gmaill.com"},
    {id:2,name:"Faruk khan",email:"faruk55825@gmaill.com"},
    {id:3,name:"Abu bokkor",email:"bokkor95825@gmaill.com"},
    {id:4,name:"Saddam Hossain",email:"saddam95825@gmaill.com"},
]
/* app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
}) */
app.get('/users',(req,res)=>{
    const search = req.query.search;
    // user quary paramitter 
    if(search){
        const searchRessult= users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchRessult);
    }
    else{
        res.send(users);
    }
})

app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post",req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

// dynamic api 
app.get("/users/:id",(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(["mango","orange","banana","apple"])
})

app.get('/fruites/mangoes/faizli',(req,res)=>{
    res.send("Yammy Yammy tok marka fazli");
})

app.listen(port,()=>{
    console.log("node and express",port)
})