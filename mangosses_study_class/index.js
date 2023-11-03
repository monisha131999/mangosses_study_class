// console.log("vanagam makkaley");
// console.log("press like button");
const mangoose =require(mangoose)
const User = require(' ./User')

main().catch(err=>console.log(err));

async function main(){
await mangoose.connect('mangodb://127.0.0.1:27017/test');

await User.create({name:"Balachandra",age:30})



}
// mangoose.connect("mongodb://localhost/textdb")

const user = new User({name:"Balachandra",age:30})
user.save().then(()=>{
    console.log("User Saved");
})