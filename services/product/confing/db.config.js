// import mongoose from "mongoose";
// export const mongooseConfig = mongoose.connect('mongodb://localhost:27017/nodejs-grpc')
// .then(console.log('connect db successfully'))
// .catch(err=>console.log(err.message)) 
import mongoose from "mongoose";
import { config} from "dotenv";
config()
export const mongooseConfig = async()=>{
    mongoose.set('strictQuery',true)
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connect db successfully')
    } catch (error) {
        console.log(error?.message ?? 'failed to connect database...')
    }
    process.on('SIGINT',async()=>{
        await mongoose.connection.close()
        process.exit(0)

    })
}