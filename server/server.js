const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/api/test", (req, res) => {
    res.json({
        message: "Hirely Backend + MongoDB is running successfully!"
    });
});

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Hirely server running on port ${PORT}`);
    });
}

startServer();