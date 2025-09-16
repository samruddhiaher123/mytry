const express=require("express");
const app=express();
const router=express.Router();
const connectDb=require("./db");
const port=3000;
const users=require('./routes/users');
app.use(express.json());
connectDb();
app.use('/api/user',users);
app.get("/",(req,res)=>{
    console.log("i am inside home page route");
    res.send("hey sam,how are your");
});
app.listen(port,()=>{
    console.log("connected");
})
