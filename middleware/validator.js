const validate=async(req,res,next)=>{
    try {
        const city=req.params.city
        city=city.split(" ")
        for(let i=0;i.city.length;i++){
            if(Number(city[i])==true){
                res.send("invalid city name")
            }
        }

        next()
    } catch (error) {
        return res.status(404).send("err",error)
        
    }
}
module.exports={validate}