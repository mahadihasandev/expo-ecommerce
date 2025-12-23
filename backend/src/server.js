import express from 'express'

const app=express()
app.get("/",(req,res)=>{
    res.status(200).json({message:"api is up"})
})

app.listen(3000,()=>{console.log('Server is running at 4000');
})