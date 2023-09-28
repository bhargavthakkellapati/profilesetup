const express = require('express');
const router = express.Router();

router.use('/createprofile',require('./createProfileSetup'))
router.use('/getprofiles',require('./getprofiles'))
router.use('/getprofilesbyid',require('./getProfileById'))
router.use('/getprofilesbyfilter',require('./getProfilesbyQueryParams'))
router.use('/updateprofiles',require('./updateProfile'))
module.exports=router