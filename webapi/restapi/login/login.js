const express = require('express');
const router = express.Router();
const sqlcon = require('../../sqlcon')

//post request
router.post('/logindata',(res,req) => {
    console.log(req.body);
    let logindatafeed = JSON.stringify(req.body);
    let stored_procedure_query = "EXEC SpUserLoginData @loginjson ='"+logindatafeed+"';"
    sqlcon.dosomthing(stored_procedure_query);
})


//get requests
router.get('/logincheck' , (req,res) => {
    
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
                    logindata = data
                }
                conn.close()
                    
                    })})}
    )


module.exports = router;