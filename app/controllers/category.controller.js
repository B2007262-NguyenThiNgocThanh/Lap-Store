// //danh mục sản phẩm
// //const { Mongoose } = require("mongoose");
// const MongoDB = require("../utils/mongodb.util");
// const ApiError = require("../api-error");
// const Category = require("../models/category.model");

// //create and save a new category
// exports.createCategory = async (req, res, next) => {

//     if(!req.body?.name){
//         return next(new ApiError(400, "Name can not be empty"));
//     }

//     try{
//         const category = await Category.create(req.body);
//         return res.status(201).json({
//             success: true,
//             category,
//         });
//     }catch(error){
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất danh mục.")
//         );
//     }
// };


// exports.findAllCategory = async (req, res, next) => {
//     try{
//         const category = await Category.find();
//         return res.status(201).json({
//             success: true,
//             category,
//         });
//     }catch(error){
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất danh mục.")
//         );
//     }
// };


// //Delete a category with the specified id in the request
// exports.deleteCategory = async (req, res, next) => {
//     const category = await Category.findById(req.params.id);
//     if(!category){
//         return next(new ApiError(404,"Danh mục của sản phẩm không tồn tại!"));
//     }
//     try{
//         await category.remove();
//             res.status(200).json({
//             success: true,
//             message: "Xóa danh mục thành công!"
//         })
//     }catch (error) {
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất danh mục.")
//         );
//     }
    
// };

exports.createCategory = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAllCategory = (req, res) => {
    res.send({ message: "findAll handler" });
};

exports.deleteCategory = (req,  res) => {
    res.send({ message: "delete handler" });
};