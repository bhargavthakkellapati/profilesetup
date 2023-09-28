const express=require ("express")
const router=express.Router()
const profilesetup=require('../../model/profileSetupSchema')

router.get('/',async(req,res)=>{
    try{
        const allProfiles=await profilesetup.find({})

        if (allProfiles){
            return res.status(200).json({status:200,message:"success",data:allProfiles})
        }

    }
    catch(error){
        console.error(error)
        return res.status(404).json({status : 404 , message : "error" ,error:error })
    }
})
module.exports=router;