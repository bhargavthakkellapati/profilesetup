const mongoose=require('mongoose')
const Schema=mongoose.Schema

let profileSetupschema=mongoose.Schema({
    fullName:{
        type:String,
        minlength:1,
        maxlength:120,
        require:true
    },
    emailAddress:{
        type:String,
        trim:true,
        minlength:1,
        maxlength:30,
        require:true
    },
    password:{
        type:String,
        minlength:5,
        maxlength:20,
        require:true
    },
   
    addFamilyMember:{
         firstname:{
            type:String,
            minlength:1,
            maxlength:120,
            require:true
         },
         secondName:{
            type:String,
            minlength:1,
            maxlength:120,
            require:true

         },
         email:{
            type:String,
            trim:true,
            minlength:1,
            maxlength:30,
            require:true

         },
         relationship:{
            type:String,
            minlength:1,
            maxlength:120,
            require:true

         }
    },
    medicalServicesType:{
        type:String,
        enum:["TELE HEALTH","HOME HEALTH","SENIOR CARE","TRANSPOTATION","PHARMACY","MEDICAL SUPPLIES"]
    },
    dateOfBirth:{
        type:Date,
        minlength:10,
        maxlength:20,
        require:true,
        trim:true
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10,
        require:true
    },
    country:{
        type:String,
        minlength:1,
        maxlength:20,
        require:true

    },
    zipCode:{
        type:Number,
        minlength:1,
        maxlength:10,
        require:true
    },
    gender:{
        type:String,
        enum:["MALE","FEMALE","OTHERS"]
    }


})
var profilesetup = mongoose.model("profileSetupschema", profileSetupschema);
module.exports = profilesetup;
