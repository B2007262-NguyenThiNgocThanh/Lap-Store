// //Ca làm việc
// const { Mongoose } = require("mongoose");
// const MongoDB = require("../utils/mongodb.util");
// const ApiError = require("../api-error");
// const Shift = require("../models/product.model");

// //tạo và lưu ca làm việc mới
// exports.createShift = async (req, res, next) => {

//     if(!req.body?.shiftName){
//         return next(new ApiError(400, "Name can not be empty"));
//     }

//     try{
//         const shifts = await Shift.create(req.body);
//         return res.status(201).json({
//             success: true,
//             shifts,
//         });
//     }catch(error){
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất ca làm việc.")
//         );
//     }
// };


// exports.findAllShift = async (req, res, next) => {
//     try{
//         const shifts = await Shift.find();
//         return res.status(201).json({
//             success: true,
//             shifts,
//         });
//     }catch(error){
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất ca làm việc.")
//         );
//     }
// };

// //find a single shift with an id
// exports.findOneShift = async(req, res, next) => {
//     const shift = await Shift.findById(req.params.id);
//     if(!shift) {
//         return next(new ApiError(404,"ca làm việc không tồn tại!"));
//     }
//     try{
//         res.status(200).json({
//             success: true,
//             product,
//         })
//     }catch (error) {
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất ca làm việc.")
//         );
//     }
// };

// //Update a shift by the id in the request
// exports.updateShift = async (req, res, next) => {
//     let shift = Shift.findById(req.params.id);
//     if(!shift) {
//         return next(new ApiError(404,"Ca làm việc không tồn tại!"));
//     }
//     try{
//         shift = await Shift.findByIdAndUpdate(req.params.id, req.body, {
//             new:true,
//             runValidators: true,
//             useFindAndModify: false
//         });
//         res.status(200).json({
//             success: true,
//             shift,
//             message: "Ca làm việc được cập nhật thành công!"
//         })
//     }catch (error) {
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất Ca làm việc.")
//         );
//     }
    
// };

// //Delete a shift with the specified id in the request
// exports.deleteShift = async (req, res, next) => {
//     const shift = await Shift.findById(req.params.id);
//     if(!shift){
//         return next(new ApiError(404,"Ca làm việc không tồn tại!"));
//     }
//     try{
//         await shift.remove();
//             res.status(200).json({
//             success: true,
//             message: "Xóa ca làm việc thành công!"
//         })
//     }catch (error) {
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất ca làm việc.")
//         );
//     }
    
// };

exports.createShift = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAllShift = (req, res) => {
    res.send({ message: "findAll handler" });
};

exports.findOneShift = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.updateShift = (req, res) => {
    res.send({ message: "update handler" });
};


exports.deleteShift = (req,  res) => {
    res.send({ message: "delete handler" });
};