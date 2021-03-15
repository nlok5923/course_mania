  
const mongoose = require("mongoose")

let information = new mongoose.Schema({
    name:{type:String,default:null},
    phone :{type:String,default:null},
    src:{type:String,default:null},
    course:{type:String,default:null},
    mail:{type:String,default:null}
})

module.exports = mongoose.model('customerInfo',information);