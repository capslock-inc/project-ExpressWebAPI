//importing
const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const sqlcon = require('../../sqlcon');

//get requests

router.get("/adduserdata", (req,res) => {
    res.send("adduserapi")
})

//post requests

router.post("/adduserdata" , (req,res) => {
    console.log(req.body.UserEmail);

    //sql procedure
    let userdatafromangular = JSON.stringify(req.body);
    //let stored_procedure_query = "EXEC SpUserFillData @json ='"+userdatafromangular+"';";
    //sqlcon.dosomthing(stored_procedure_query);

    //token
    let payload = { subject: req.body.UserEmail }
    let token = jwt.sign(payload,"secretkey")
    res.status(200).send({token})
})

module.exports = router;