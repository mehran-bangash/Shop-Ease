require("dotenv").config();
const express=require('express');
const app=express();
const PORT=process.env.PORT;
const cors=require('cors');
const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');
const paymentRoutes=require('./routes/paymentRoutes')

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'*',
    credentials:true
}));


app.get('/info',(req,res)=>{
    res.json({
        message:"We are at the payment service",
        PORT
    })
})
app.use(paymentRoutes);

app.listen(PORT,()=>{
    console.log(`Listening at PORT ${PORT}`);
});