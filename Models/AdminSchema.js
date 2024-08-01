const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
})

const Admin = mongoose.model("Admin",AdminSchema,);

module.exports = Admin;