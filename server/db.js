import mongoose from 'mongoose'

const connectDB = async()=>{
    const config = useRuntimeConfig()
    console.log(config.db)
    try {
        const DB_OPTIONS = {
            dbName: config.dbName,
            user: "",
            pass: "",
            authSource: ""
        }
        await mongoose.connect(process.env.MONGOURL)
        console.log('MONGO connected ✅✅✅');

    } catch (error) {
        console.log('ERROR connecting to MONGO ☠️☠️☠️', error)
    }
}

export default connectDB