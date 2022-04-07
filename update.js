const connect = require('./mongodb');


const updateData = async() => {
    let data = await connect();
    let result = await data.updateOne({ name: 'Samsung A52 Pro Max' }, {
        $set: { price: 2099 }
    })
    console.log(result);
    // if (result.acknowledged) {
    //     console.log('Record Updated Successfuly..')
    // }
}

updateData();