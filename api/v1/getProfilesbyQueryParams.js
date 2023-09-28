const express = require("express");
const router = express.Router();
const profilesetup = require("../../model/profileSetupSchema");

router.get("/", async (req, res) => {
  try {
    const { fullName, medicalServicesType, zipCode, gender } = req.query;
    try {
      let query = {};
      if (fullName) {
        query.fullName = fullName;
      }
      if (medicalServicesType) {
        query.medicalServicesType = medicalServicesType;
      }
      if (zipCode) {
        query.zipCode = zipCode;
      }
      if (gender) {
        query.gender = gender;
      }
      console.log("query", query);
      const getData = await profilesetup.find(query);
      if (!getData) {
        return res.status(404).json({ status: 404, message: "no data found" });
      }
      return res.json(getData);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: "cant get details" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: 500, message: "internal server error" });
  }
});
module.exports = router;
