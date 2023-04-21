const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");

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


//handle 404 response
app.use((req, res, next) =>{
    return next(new ApiError(404, "Resource not found")); 
});

//define error-handling middleware last, after other app.use() and route calls
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Interal Server Error",
    });
});



app.get("/", (req, res) =>{
    res.json({message: "Welcome to management laptop store application."});
});

module.exports = app;



