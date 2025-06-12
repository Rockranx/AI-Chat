import mongoose from 'mongoose'


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log('MongoDb Connected')
    } catch (error) {
        console.error('Database connection error:', error.message)
        process.exit(1)
    }
}

export  default connectDB