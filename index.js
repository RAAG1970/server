const mysql=require("mysql");
const db=mysql.createConnection({
    host:"database-1.ckkek1y5onqp.us-west-1.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"Pololo09",
    database:"juegagan",
});

db.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Database connected");
});