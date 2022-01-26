const mongoose = require('mongoose');
const {uri, name, user, password} = require('./config').config.database;
const connect =  async () =>  {
    try {
        await mongoose.connect(`mongodb+srv://${user}:${password}@${uri}/${name}?ssl=true`);
        console.log("mongodb connection ok");
    } catch (error) {
        console.error("mongodb connection error", error.message);
        throw error;   
    }
}

module.exports = {
    connect
}