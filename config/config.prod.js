const fs = require('fs');

module.exports = {
    cors: process.env.CORS || 'http://localhost:3001',
    port: process.env.PORT || 3000,
    exclude: {
        files: JSON.parse(process.env.EXCLUDE_FILES) || []
    },
    size: process.env.EXPRESS_SIZE || '50mb',
    elasticsearch: {
        url: process.env.ELASTICSEARCH_URL
    },
    database: {
        uri: process.env.MONGO_URI,
        name: process.env.MONGO_NAME,
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD
    }
}