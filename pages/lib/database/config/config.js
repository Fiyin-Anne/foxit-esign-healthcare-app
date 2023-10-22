require('dotenv').config({ path: ".env.local" });

module.exports = {
    development: {
        host: process.env.DEV_DATABASE_HOST,
        username: process.env.DEV_DATABASE_USER,
        password: process.env.DEV_DATABASE_PWD,
        database: process.env.DEV_DATABASE_NAME,
        dialect: 'mysql',
    }
}