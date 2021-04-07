const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken")

// middleware
function tokenverification(req, res, next){
    if (!req.headers.authorization){
        return res.status(401).send("not valid")
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token === "null"){
        return res.status(401).send('not valid')
    }
    let payload = jwt.verify(token, "secretkey");
    if(!payload){
        return res.status(401).send('not valid')
    }
    req.Email = payload.subject
    next()
}

const sql = require("mssql")

//view
function view(a){

            }


//tokenverification ,
// get requests
 router.get('/viewuserdata', (req,res) => {
    dbConfig = {
        server:"172.16.0.201\\SQLEXPRESS",
        database:"OpenWaveDB",
        user:"openwave",
        password:"openwave123",
        port:1433
        }
        var conn = new sql.ConnectionPool(dbConfig)
        var req = new sql.Request(conn);
    
        conn.connect(function(err){
            if(err){
                console.log("connection failed")
                console.log(err);
                return;
            }
            console.log("connection established")
                req.query("EXEC SpGetAllUsers",function(err,data){//callback
                if(err){
                    console.log(err);
                    
                        
                }else{
                    
                    res.json(data.recordset)
                    console.log("data transfer : SUCCESFULL")
                }
                conn.close()
                console.log("connection terminated and closed")
                    
                    })})
 })
    

router.post("/getdetail",(req,res) => {
    console.log(req.body);
    let num = parseInt(req.body.UserId);
    console.log(num)

    dbConfig = {
        server:"172.16.0.201\\SQLEXPRESS",
        database:"OpenWaveDB",
        user:"openwave",
        password:"openwave123",
        port:1433
        }
        var conn = new sql.ConnectionPool(dbConfig)
        var req = new sql.Request(conn);
    
        conn.connect(function(err){
            if(err){
                console.log("connection failed")
                console.log(err);
                return;
            }
            console.log("connection established")
                req.query("EXEC SpFindUser @UserId="+ num +";",function(err,data){//callback
                if(err){
                    console.log(err);
                    
                        
                }else{
                    //console.log(data.recordset[0])
                    res.json(data.recordset[0])
                    console.log("data transfer : SUCCESFULL")
                }
                conn.close()
                console.log("connection terminated and closed")
                    
                    })})

})



module.exports = router;