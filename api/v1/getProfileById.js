const express=require ("express")
const router=express.Router()
const profilesetup=require('../../model/profileSetupSchema')

router.get('/:id',async(req,res)=>{
    try{
        const profilesById=await profilesetup.findById(req.params.id)
        return res.json(profilesById)

    }
    catch(error){
        console.error(error)
        return res.status(500).json({messsage:"internal server error",error})
    }
})
module.exports=router;
