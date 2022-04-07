const connect = require('./mongodb');

const insertData = async() => {
    let db = await connect();
    // const result = await db.insertOne({ name: 'Nokia 360', brand: 'Nokia', price: 250, warrenty: '1 Year', madein: 'Pakistan' });
    const result = await db.insertMany([
        { name: 'Samsung 360', brand: 'Samsung', price: 200, warrenty: '1 Year', madein: 'Pakistan' },
        { name: 'Samsung S22', brand: 'Samsung', price: 999, warrenty: '2 Year', madein: 'USA' },
        { name: 'Samsung A52', brand: 'Samsung', price: 650, warrenty: '2 Year', madein: 'Germany' },
        { name: 'Samsung Note 10 Pro', brand: 'Samsung', price: 1099, warrenty: '3 Year', madein: 'Pakistan' },
    ])
    if (result.acknowledged) {
        console.log("Record Added Successfuly..!");
    }
}

insertData();