//importing
const express = require('express');
const router = express.Router();
const sqlcon = require('../../sqlcon')

//get requests

router.get("/adduserdata", (req,res) => {
    res.send("adduserapi")
})

//post requests

router.post("/adduserdata" , (req,res) => {
    console.log(req.body);
    res.status(200).send({"message":"data recieved -- adduser"})
    let userdatafromangular = JSON.stringify(req.body);
    let stored_procedure_query = "EXEC SpUserFillData @json ='"+userdatafromangular+"';";
    sqlcon.dosomthing(stored_procedure_query);
})

module.exports = router;