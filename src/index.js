import dotenv from 'dotenv'
import connectDB from "./db/index.db.js";
dotenv.config({
    path:'./env'
})
connectDB()

















/*(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log('ERROR!!',error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log('server running');
            
        })
    } catch (error) {
        console.log("ERROR: ",error);
        throw error
    }
})()*/