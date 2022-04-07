const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'practice';

const client = new MongoClient(url);

async function connect() {
    await client.connect();
    console.log("Connected Successfully...");
    const db = client.db(dbName);
    return db.collection('products');
}

module.exports = connect;