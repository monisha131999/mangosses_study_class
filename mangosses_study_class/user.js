const mangoose=require("mangoose")

const userSchemea =new mongoose.schema({
    name: String,
    age:Number
})

module.exports=mongoose.model("User",userSchemea)