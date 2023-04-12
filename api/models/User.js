const { default: mongoose } = require('mongoose')
const { Schema } = mongoose;

//creating the user shema with props name...ex (you can add methods https://mongoosejs.com/docs/index.html)

const UserSchema = new Schema({
    name: String,
    email: {type:String,unique:true}, 
    password: String
})

//compiling our schema into a Model.
const UserModel = mongoose.model('User', UserSchema);

module.exports=UserModel