var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'redhat@123',
    database:'resto',
});
con.connect(function(error){
    if(error)throw error;
    con.query("select * from user",function(err,result){
    if(err) throw err;
    console.log("all results are here",result[0].email)

    })
})