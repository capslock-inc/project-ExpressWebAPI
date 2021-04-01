const express = require('express');
const router = express.Router();

const sql = require("mssql")

// get requests
router.get('/viewuserdata' , (req,res) => {
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
                req.query("SELECT * FROM USERDATA order by UserFirstName",function(err,data){//callback
                if(err){
                    console.log(err);
                    
                        
                }else{
                    
                    res.json(data.recordset)
                    console.log("data transfer : SUCCESFULL")
                }
                conn.close()
                console.log("connection terminated and closed")
                    
                    })})}
    )



module.exports = router;