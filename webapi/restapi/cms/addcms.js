//importing
const express = require('express');
const router = express.Router();
const sqlcon = require('../../sqlcon')

//get requests

router.get("/addcmsdata", (req,res) => {
    res.send("addcmsapi")
})

//post requests


router.post("/addcmsdata" , (req,res) => {
    console.log(req.body);
    res.status(200).send({"message":"data recieved -- addcms"})
    let cmsdatafromangular = JSON.stringify(req.body);
    let stored_procedure_query = "EXEC SpCmsData @cmsjson ='"+cmsdatafromangular+"';";
    sqlcon.dosomthing(stored_procedure_query);
})

module.exports = router;