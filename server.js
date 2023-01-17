const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const db = require("./models");
const app = express();

dotenv.config();

let corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ads application." });
});

app.use('/api/admin/auth', require('./app/auth/admin/router'));
app.use('/api/admin/users', require('./app/users/admin/router'));


// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
