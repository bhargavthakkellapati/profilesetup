const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const profilesetup = require('../../model/profileSetupSchema');

router.put('/:id',async(req,res)=>{
    try{
        const reqbody = req.body

        const reqParams = req.params

        const updateprofile = {};
        
        if (req.get("Content-Type") != "application/json") {

            return res.status(404).json({ status: 404, message: 'Invalid header format' });

        }
        if(reqbody.hasOwnProperty("fullName")){

            if((reqbody.fullName.length >1 )&& (typeof reqbody.fullName === 'string') ){

                updateprofile.fullName = reqbody.fullName

            } else{

                return res.status(404).json({message :"please enter valid fullName"})

            }

        }
        if(reqbody.hasOwnProperty("emailAddress")){

            if((reqbody.emailAddress.length >1 )&& (typeof reqbody.emailAddress === 'string') ){

                updateprofile.emailAddress = reqbody.emailAddress

            } else{

                return res.status(404).json({message :"please enter valid emailAddress"})

            }

        }
        if(reqbody.hasOwnProperty("password")){

            if((reqbody.password.length >1 )&& (typeof reqbody.password === 'string') ){

                updateprofile.password = reqbody.password

            } else{
                return res.status(404).json({message :"please enter valid password"})

            }

        }
        if(reqbody.hasOwnProperty("addFamilyMember")){

            if((`${reqbody.addFamilyMember.firstname}`.length >1 )&& (`${typeof reqbody.addFamilyMember.firstname}` === 'string'))

                updateprofile.addFamilyMember= reqbody.addFamilyMember

            } else{

                return res.status(404).json({message :"please enter valid firstname"})

            }

        
        if(reqbody.hasOwnProperty("addFamilyMember")){

            if((`${reqbody.addFamilyMember.secondName}`.length >1 )&& (`${typeof reqbody.addFamilyMember.secondName}` === 'string') ){

                updateprofile.addFamilyMember= reqbody.addFamilyMember

            } else{

                return res.status(404).json({message :"please enter valid secondName"})

            }

        }
        if(reqbody.hasOwnProperty("addFamilyMember")){

            if((`${reqbody.addFamilyMember.email}`.length >1 )&& (`${typeof reqbody.addFamilyMember.email}` === 'string') ){

                updateprofile.addFamilyMember.email = reqbody.addFamilyMember.email

            } else{

                return res.status(404).json({message :"please enter valid email"})

            }

        }
        if(reqbody.hasOwnProperty("addFamilyMember")){

            if((`${reqbody.addFamilyMember.relationship}`.length >1 )&& (`${typeof reqbody.addFamilyMember.relationship}` === 'string') ){

                updateprofile.addFamilyMember.relationship = reqbody.addFamilyMember.relationship

            } else{

                return res.status(404).json({message :"please enter valid relationship"})

            }

        }
        
        if(reqbody.hasOwnProperty("medicalServicesType")){
             const medicalenum=["TELE HEALTH","HOME HEALTH","SENIOR CARE","TRANSPOTATION","PHARMACY","MEDICAL SUPPLIES"]
            console.log('hi',medicalenum.includes(reqbody.medicalServicesType))
            if((medicalenum.includes(reqbody.medicalServicesType) && (reqbody.medicalServicesType.length>1)) && (typeof reqbody.medicalServicesType === 'string') ){

                updateprofile.medicalServicesType = reqbody.medicalServicesType

            } else{

                return res.status(404).json({message :"please enter valid medicalServicesType "})

            }

        }
        if(reqbody.hasOwnProperty("dateOfBirth")){

            if((reqbody.dateOfBirth.length >1 )&& (typeof reqbody.dateOfBirth === 'string') ){

                updateprofile.dateOfBirth = reqbody.dateOfBirth

            } else{

                return res.status(404).json({message :"please enter valid dateOfBirth"})

            }

        }
        if(reqbody.hasOwnProperty("phone")){

            if((reqbody.phone.length >1 )&& (typeof reqbody.phone === 'string') ){

                updateprofile.phone = reqbody.phone

            } else{

                return res.status(404).json({message :"please enter valid phone"})

            }

        }
        if(reqbody.hasOwnProperty("country")){

            if((reqbody.country.length >1 )&& (typeof reqbody.country === 'string') ){

                updateprofile.country = reqbody.country

            } else{

                return res.status(404).json({message :"please enter valid country"})

            }

        }
        if(reqbody.hasOwnProperty("zipCode")){

            if((reqbody.zipCode.length >1 )&& (typeof reqbody.zipCode === 'string') ){

                updateprofile.zipCode = reqbody.zipCode

            } else{

                return res.status(404).json({message :"please enter valid zipCode"})

            }

        }
        if(reqbody.hasOwnProperty("gender")){

             const genderenum=["MALE","FEMALE","OTHERS"]
            if(((genderenum.includes(reqbody.gender)))&& (typeof reqbody.gender === 'string') ){

                updateprofile.gender = reqbody.gender

            } else{

                return res.status(404).json({message :"please enter valid gender"})

            }

        }
        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(404).json({ errors: errors.array() });

        }

        if(errors.isEmpty()){

            try{

                const updateProfiles = await profilesetup.findOneAndUpdate({_id:reqParams.id},updateprofile , {new : true});

                return res.json(updateProfiles)

            }catch(error){
                console.error(error)

                return res.status(401).json({ status: 404, message: 'Unable to update user profile' })

            }

        }

}
       

    catch(error){
    console.error(error)
    return res.status(500).json({status:500,message:"internal server error"})
    }
})
module.exports=router