  
const mongoose = require("mongoose")

let information = new mongoose.Schema({
    mail:{type:String,default:null}
})

module.exports = mongoose.model('customerMail',information);