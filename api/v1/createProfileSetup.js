const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const profilesetup = require('../../model/profileSetupSchema');

router.post("/",
[
    body('fullName').isLength({min:1}).isString().withMessage('please provide valid fullname'),
    body('emailAddress').isLength({min:1}).isString().trim().withMessage('please provide valid emailAddress'),
    body('password').isLength({min:5}).isString().withMessage('please provide valid password'),
    body('confirmPassword').isLength({min:5}).isString().withMessage('please provide valid confirmPassword'),
     body('addFamilyMember.firstname').isLength({min:1}).isString().withMessage('please provide valid firstname'),
     body('addFamilyMember.secondName').isLength({min:1}).isString().withMessage('please provide valid secondName'),
     body('addFamilyMember.email').isLength({min:1}).isString().trim().withMessage('please provide valid email'),
     body('addFamilyMember.relationship').isLength({min:1}).isString().withMessage('please provide valid relationship'),
    body('dateOfBirth').isLength({min:1}).isString().trim().withMessage('please provide valid dateOfBirth'),
    body('phone').isLength({min:1}).trim().isNumeric().withMessage('please provide valid phone'),
    body('country').isLength({min:1}).isString().withMessage('please provide valid country'),
    body('zipCode').isLength({min:1}).isNumeric().trim().withMessage('please provide valid zipCode'),

],
async(req,res)=>{
    try{
        let reqBody = req.body;
        if (req.get("Content-Type") != "application/json") {
            return res.status(404).json({ status: 404, message: 'Invalid header format' });
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (reqBody.password != reqBody.confirmPassword) {
            return res.json({ status: 404, message: ' password and confirm password should be same' });
        }
        if(errors.isEmpty){
        const newUser=new profilesetup()
            newUser.fullName=reqBody.fullName
            newUser.emailAddress=reqBody.emailAddress
            newUser.password=reqBody.password
            newUser.addFamilyMember=reqBody.addFamilyMember
            newUser.medicalServicesType=reqBody.medicalServicesType
            newUser.dateOfBirth=reqBody.dateOfBirth
            newUser.phone=reqBody.phone
            newUser.country=reqBody.country
            newUser.zipCode=reqBody.zipCode
            newUser.gender=reqBody.gender

            const result=await newUser.save()
            console.log("newUser",newUser)
            return res.json(result)
        }
           
    } 
    catch(error){
        console.error(error)
        return res.status(500).json({status:500,message:"inernal server errror"})
    }
}
    )
    module.exports=router