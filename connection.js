const connect = require('./mongodb');

// handle promise with then 

// connect().then((res) => {
//     res.find().toArray().then((data) => {
//         console.log(data);
//     })
// })

const main = async() => {
    let data = await connect();
    data = await data.find({}).toArray();
    console.log(data);
}

main();