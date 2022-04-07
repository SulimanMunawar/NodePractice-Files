const connect = require('./mongodb');

const deleteData = async() => {
    let data = await connect();
    let result = await data.deleteOne({ name: 'Samsung Note 10 Pro 2' });
    if (result.acknowledged && result.deletedCount > 0) {
        console.log("record Deleted...");
    } else {
        console.log("No Record Found")
    }
}

deleteData();