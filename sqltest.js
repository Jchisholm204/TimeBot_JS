mysql = require("mysql")

db = mysql.createConnection({
    host: "localhost",
    user: "bot",
    password: "pass"
});
 

db.connect(function(err){
    if(err) throw err;
    console.log("Connected!")
    db.query("use timebot", function(err, result){
        if(err) throw err;
        console.log("DataBase Created!")
    })/*
    db.query("CREATE TABLE u4727 (server VARCHAR(255), channel VARCHAR(255), tSpent TIME(0), accumulated TIME(0))", function(err, result){
        if(err) throw err;
        console.log("Table Created");
    })*/
    db.query("INSERT INTO u4727 (server, channel, tSpent, accumulated) VALUES ('Brian', 'General', '00:00:15', '00:00:40')", function(err, result){
        if(err) throw err;
        console.log("Record Inserted");
    })
})