// //Ca làm việc
const ShiftManage = require("../managements/shift.manage");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

//tạo và lưu ca làm việc mới
exports.createShift = async (req, res, next) => {
    if(!req.body?.name){
        return next(new ApiError(400, "Name can not be empty !"));
    }

    try{
        const shiftManage = new ShiftManage(MongoDB.client);
        const shift = await shiftManage.create(req.body);
        return res.send(shift);
    }catch(error){
        return next(
            new ApiError(500, "Đã xảy ra lỗi khi truy xuất ca làm việc.")
        );
    }
};


exports.findAllShift = async (req, res, next) => {
    let shifts = [];

    try{
        const shiftManage = new ShiftManage(MongoDB.client);
        const { name } = req.query;
        if (name){
            shifts = await shiftManage.findByName(name);
        }
        else{
            shifts = await shiftManage.find({});
        }
    }catch(error){
        return next(
            new ApiError(500, "Đã xảy ra lỗi khi truy xuất ca làm việc.")
        );
    }
    return res.send(shifts);
};

//find a single shift with an id
exports.findOneShift = async(req, res, next) => {
    try{
        const shiftManage = new ShiftManage(MongoDB.client);
        const shift = await shiftManage.findById(req.params.id);
        if(!shift) {
            return next(new ApiError(404,"ca làm việc không tồn tại!"));
        }
        return res.send(shift);
    }
    catch (error) {
        return next(
            new ApiError(500, `Đã xảy ra lỗi khi truy xuất ca làm việc với id = ${eq.params.id}`)
        );
    }
};

//Update a shift by the id in the request
exports.updateShift = async (req, res, next) => {
    if(Object.keys(req.body).length === 0){
        return next(new ApiError(400, "Dữ liệu cập nhật không thể rỗng !"));
    }
    try{
        const shiftManage = new ShiftManage(MongoDB.client);
        shift = await shiftManage.update(req.params.id, req.body);
        if(!shift) {
            return next(new ApiError(404,"Không tìm thấy ca làm việc !"));
        }
        return res.send({massage: "Ca làm việc được cập nhật thành công!"});
    }catch (error) {
        return next(
            new ApiError(500, `Đã xảy ra lỗi khi cập nhật ca làm việc với id = ${req.params.id}`)
        );
    }
    
};

//Delete a shift with the specified id in the request
exports.deleteShift = async (req, res, next) => {
    try{
        const shiftManage = new ShiftManage(MongoDB.client);
        const shift = await shiftManage.delete(req.params.id);

        if(!shift){
            return next(
                new ApiError(404, "Không tìm thấy ca làm việc !")
            );
        }
        return res.send({ message: "Ca làm việc đã được xóa thành công !" });
    }catch(error){
        return next(
            new ApiError(500, `Không thể xóa ca làm việc có id=${req.params.id}`)
        );
    }
};

