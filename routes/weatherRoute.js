const express=require("express");
const { client } = require("../redis");
const weatherRoute=express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
weatherRoute.get("/:city",async(req,res)=>{
    try {
        const city=req.params.city
        let data=await client.get(city)
        if(data){
            return res.send(data)
        }
        
        let getlat=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.weatherKey}`).then((res)=>res.json())

        // let weatherApi=await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.weatherKey}`).then((res)=>res.json())
        client.set(city,JSON.stringify(getlat),{EX:180})
        // console.log(getlat);
        res.send({data:getlat,mongo:"mongo"})
    } catch (error) {
        return res.send("err",error)
        
    }
})

module.exports={weatherRoute}