const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});
conn.connect((error) => {
    if (error) {
        console.log("Error Occured", error);
    }
})

module.exports = conn;