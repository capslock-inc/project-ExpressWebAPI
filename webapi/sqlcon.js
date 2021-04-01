//importing mssql
const sql = require("mssql")
//sql server's detail configuration
 dbConfig = {
    server:"172.16.0.201\\SQLEXPRESS",
    database:"OpenWaveDB",
    user:"openwave",
    password:"openwave123",
    port:1433
    }
 //establishing connection to the sql server   
    function dosomthing(a){
     var conn = new sql.ConnectionPool(dbConfig)
     var req = new sql.Request(conn);

     conn.connect(function(err){
         if(err){
             console.log("connection failed")
             console.log(err);
             return;
         }else{
             console.log("connection established")
              req.query(a,function(err,data){//callback
                if(err){
                    console.log(err);
                    conn.close()
                    return;
                    
                }else{
                    conn.close()
                    return data
                }
                
                })}})};

        

module.exports = {dosomthing,dbConfig} ;