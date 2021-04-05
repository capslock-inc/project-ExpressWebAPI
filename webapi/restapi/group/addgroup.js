//importing
const express = require('express');
const router = express.Router();
const sqlcon = require('../../sqlcon')

//get requests

router.get("/addgroupdata", (req,res) => {
    res.send("addgroupapi")
})

//post requests

router.post("/addgroupdata" , (req,res) => {
    console.log(req.body);
    res.status(200).send({"message":"data recieved -- addgroup"})
    let usergroupdatafromangular = JSON.stringify(req.body);
    let stored_procedure_query = "EXEC SpUserGroupData @grpjson ='"+usergroupdatafromangular+"';";
    sqlcon.dosomthing(stored_procedure_query);
})

module.exports = router;