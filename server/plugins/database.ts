import mongoose from "mongoose"

export default defineNitroPlugin((nitroApp) => {
    mongoose.connect(useRuntimeConfig().dburl)
    console.log("MONGO connected successfully ✅✅✅");
})
