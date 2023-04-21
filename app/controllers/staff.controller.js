// //nhân viên
// //const { Mongoose } = require("mongoose");
// const MongoDB = require("../utils/mongodb.util");
// const ApiError = require("../api-error");
// const StaffManage = require("../models/staff.model");

// //create and save a new staff
// exports.createStaff = async (req, res, next) => {

//     if(!req.body?.staffName){
//         return next(new ApiError(400, "Name can not be empty !"));
//     }

//     try{
//         const productManage = new ProductManage(MongoDB.client);
//         const staffs = await productManage.create(req.body);
//         return res.send(staffs);
//     }catch(error){
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất nhân viên")
//         );
//     }
// };

// //retrieve all staff from the database
// exports.findAllStaff = async (req, res, next) => {
//     let staffs = [];

//     try{
//         const staffManage = new StaffManage(MongoDB.client);
//         const { name } = req.query;
//         if (name){
//             staffs = await staffManage.findByName(name);
//         }
//         else{
//             staffs = await staffManage.find({});
//         }
//     }catch(error){
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất nhân viên.")
//         );
//     }
//     return res.send(staffs);
// };


// //find a single staff with an id
// exports.findOneStaff = async(req, res, next) => {
//     try{
//         const staffManage = new StaffManage(MongoDB.client);
//         const staff = await staffManage.findById(req.params.id);
//         if(!product) {
//             return next(new ApiError(404,"Nhân viên không tồn tại!"));
//         }
//         return res.send(product);
//     }
//     catch (error) {
//         return next(
//             new ApiError(500, `Đã xảy ra lỗi khi truy xuất sản phẩm với id = ${eq.params.id}`)
//         );
//     }
// };

// //Update a staff by the id in the request
// exports.updateStaff = async (req, res, next) => {
//     if(Object.keys(req.body).length === 0){
//         return next(new ApiError(400, "Dữ liệu cập nhật không thể rỗng !"));
//     }
//     try{
//         const staffManage = new StaffManage(MongoDB.client);
//         staff = await staffManage.findByIdAndUpdate(req.params.id, req.body);
//         if(!staff) {
//             return next(new ApiError(404,"Không tìm thấy nhân viên !"));
//         }
//         return res.send({massage: "Nhân viên được cập nhật thành công!"});
//     }catch (error) {
//         return next(
//             new ApiError(500, `Đã xảy ra lỗi khi cập nhật nhân viên với id = ${eq.params.id}`)
//         );
//     }
    
// };

// //Delete a staff with the specified id in the request
// exports.deleteStaff = async (req, res, next) => {
//     try{
//         const staffManage = new StaffManage(MongoDB.client);
//         const staff = await staffManage.delete(req.params.id);

//         if(!staff){
//             return next(
//                 new ApiError(404, "Không tìm thấy nhân viên")
//             );
//         }
//         return res.send({ message: "Nhân viên đã được xóa thành công !" });
//     }catch(error){
//         return next(
//             new ApiError(
//                 500,
//                 `Không thể xóa nhân viên có id=${req.params.id}`
//             )
//         );
//     }
// };

exports.createStaff = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAllStaff = (req, res) => {
    res.send({ message: "findAll handler" });
};

exports.findOneStaff = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.updateStaff = (req, res) => {
    res.send({ message: "update handler" });
};


exports.deleteStaff = (req,  res) => {
    res.send({ message: "delete handler" });
};
