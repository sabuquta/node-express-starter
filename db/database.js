require('dotenv').config();
module.exports = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
    dialect: "mysql",
    seederStorage: 'sequelize',
    dialectOptions: {
        charset: process.env.DB_CHARSET,
        decimalNumbers: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
