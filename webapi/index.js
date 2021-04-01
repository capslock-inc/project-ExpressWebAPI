//importing
const exp = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const adduserapi = require("./restapi/user/adduser");
const viewuserapi = require("./restapi/user/viewuser");
const loginapi = require("./restapi/login/login");
const addgroupapi = require("./restapi/group/addgroup");
const viewgroupapi = require("./restapi/group/viewgroup");
const addcmsapi = require("./restapi/cms/addcms");
const viewcmsapi = require("./restapi/cms/viewcms");
const addquesapi = require("./restapi/survey/addques");
const viewquesapi = require("./restapi/survey/viewques");

 
//initialting express
expres = exp() ;

//use
expres.use(cors());
expres.use(bodyparser())
expres.use("/adduser",adduserapi);
expres.use("/viewuser",viewuserapi);
expres.use("/addgroup",addgroupapi);
expres.use("/viewgroup",viewgroupapi);
expres.use("/login",loginapi);
expres.use("/addcms",addcmsapi);
expres.use("/viewcms",viewcmsapi);
expres.use("/addques",addquesapi);
expres.use("/viewques",viewquesapi);

//defining port 
PORT = 5000;

//get request
expres.get('/',(req,res) => {
    res.send("<h1>welcome to web api</h1>")
})

//running webapi
expres.listen(PORT,()=>{
    console.log(`server runs on ${PORT}`)

});