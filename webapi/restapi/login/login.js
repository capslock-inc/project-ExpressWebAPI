const express = require('express');
const jwt = require("jsonwebtoken")
const router = express.Router();
const sqlcon = require('../../sqlcon')
const sql = require("mssql")

//post request
router.post('/logindata',(req,res) => {
    // console.log(req.body);
    
    // sql procedure
    let verifydata = req.body.Email
    let verifypwd = req.body.Password
    // console.log(verifydata)
    // let logindatafeed = JSON.stringify(req.body);
    // // let stored_procedure_query = "EXEC SpUserLoginData @loginjson ='"+logindatafeed+"';"
    // // sqlcon.dosomthing(stored_procedure_query);

    // //verification
    // dbConfig = {
    //     server:"172.16.0.201\\SQLEXPRESS",
    //     database:"OpenWaveDB",
    //     user:"openwave",
    //     password:"openwave123",
    //     port:1433
    //     }
    //     var conn = new sql.ConnectionPool(dbConfig)
    //     var req = new sql.Request(conn);
    
    //     conn.connect(function(err){
    //         if(err){
    //             console.log("connection failed")
    //             console.log(err);
    //             return;
    //         }//if
    //         console.log("connection established")
    //          req.query("EXEC SpVerify @UserEmail="+verifydata+";",function(err,data){//callback
    //             if(err){
    //                 console.log(err);     
    //             }
    //             else
    //             {
    //                 let stringifieddata = JSON.stringify(data)
    //                 if (verifydata === "admin" && verifypwd ==="admin123")
    //                     {
    //                         adminpayload = { subject: "adminauthorization"}
    //                         admin = jwt.sign(adminpayload,"adminsecretkey")
    //                         token = admin
    //                         res.status(200).json({admin})
    //                     }
    //                     else
    //                     {
    //                         if(verifydata === stringifieddata.recordset.UserEmail && verifypwd === stringifieddata.recordset.UserPassword)
    //                         {  
    //                             // tokens
    //                             let payload = { subject: req.body.Email };
    //                             let token = jwt.sign(payload,'secretkey')
    //                             res.status(200).send({token})
    //                             console.log("data transfer : SUCCESFULL")
    //                         }//if
    //                         else
    //                         {
    //                             res.status(401).send("notvalid")
    //                             }//else
    //                         }//else
    //                     }//else 
                    
            

    //             conn.close()
    //             console.log("connection terminated and closed")
                   
    //     }) //req.query
    //     })//connect
    //     })//post


    //verfi normal

                 if (verifydata === "admin" && verifypwd ==="admin123")
                        {
                            adminpayload = { subject: "adminauthorization"}
                            admin = jwt.sign(adminpayload,"adminsecretkey")
                            token = admin
                            res.status(200).json({admin})
                        }
                        else
                        {  
                                // tokens
                                let payload = { subject: req.body.Email };
                                let token = jwt.sign(payload,'secretkey')
                                res.status(200).send({token})
                                console.log("data transfer : SUCCESFULL")
                            }//if
                        })
   


//get requests
// router.get('/logincheck' , (req,res) => {
    
    // dbConfig = {
    //     server:"172.16.0.201\\SQLEXPRESS",
    //     database:"OpenWaveDB",
    //     user:"openwave",
    //     password:"openwave123",
    //     port:1433
    //     }
    //     var conn = new sql.ConnectionPool(dbConfig)
    //     var req = new sql.Request(conn);
    
    //     conn.connect(function(err){
    //         if(err){
    //             console.log("connection failed")
    //             console.log(err);
    //             return;
    //         }
    //         console.log("connection established")
    //             req.query("SELECT * FROM USERDATA order by UserFirstName",function(err,data){//callback
    //             if(err){
    //                 console.log(err);        
    //             }else{
    //                 logindata = data
    //             }
    //             conn.close()
                    
    //                 })})}
    // )

    




module.exports = router;