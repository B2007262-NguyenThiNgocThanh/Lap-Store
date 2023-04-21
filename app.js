const express = require("express");
const cors = require("cors");

const productRouter = require("./app/routes/product.route");
const staffRouter = require("./app/routes/staff.route");
const categoryRouter = require("./app/routes/category.route");
const shiftRouter = require("./app/routes/shift.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/staff", staffRouter);
app.use("/api/category", categoryRouter);
app.use("/api/shift", shiftRouter);


app.get("/", (req, res) =>{
    res.json({message: "Welcome to management laptop store application."});
});

module.exports = app;

