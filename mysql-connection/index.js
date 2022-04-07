const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});
con.connect((error) => {
    if (error) {
        console.log("Can not connect to Database Try Again")
    } else {
        console.log("Connected Successfuly");
    }
})

con.query("select * from users", (error, result) => {
    if (error) {
        console.log("Error Occured", error);
    } else {
        console.log("Result: ", result)
    }
})