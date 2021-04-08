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
    let stored_procedure_query = "EXEC SpUserFillData @json ='"+userdatafromangular+"';";
    sqlcon.dosomthing(stored_procedure_query);

    //token
    let payload = { subject: req.body.UserEmail }
    let token = jwt.sign(payload,"secretkey")
    res.status(200).send({token})
})

router.post("/edituser", (req, res) => {


    res.status(200).send({"message":"data recieved -- addgroup"})
    let usergroupdatafromangular = JSON.stringify(req.body);


    let stored_procedure_query = "EXEC SpUpdateUserData @userid="+ req.body.UserId+", @newjson ='"+usergroupdatafromangular+"';";
    sqlcon.dosomthing(stored_procedure_query);

})

router.post('/deleteuser', (req,res) => {
    let id = parseInt(req.body.UserId);
    let stored_procedure_query = "EXEC SpDeleteUser @userdel ="+id;
    res.status(200).send({"message":"deleted successfully"})
    sqlcon.dosomthing(stored_procedure_query);

})

module.exports = router;