// //danh mục sản phẩm
const CategoryManage = require("../managements/category.manage");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

//create and save a new category
exports.createCategory = async (req, res, next) => {

    if(!req.body?.name){
        return next(new ApiError(400, "Name can not be empty !"));
    }

    try{
        const categoryManage = new CategoryManage(MongoDB.client);
        const category = await categoryManage.create(req.body);
        return res.send(category);
    }catch(error){
        return next(
            new ApiError(500, "Đã xảy ra lỗi khi truy xuất danh mục ! ")
        );
    }
};

//retrieve all category from the database
exports.findAllCategory = async (req, res, next) => {
    let category = [];

    try{
        const categoryManage = new CategoryManage(MongoDB.client);
        const { name } = req.query;
        if (name){
            category = await categoryManage.findByName(name);
        }
        else{
            category = await categoryManage.find({});
        }
    }catch(error){
        return next(
            new ApiError(500, "Đã xảy ra lỗi khi truy xuất danh mục.")
        );
    }
    return res.send(category);
};


//Delete a category with the specified id in the request
exports.deleteCategory = async (req, res, next) => {
    try{
        const categoryManage = new CategoryManage(MongoDB.client);
        const category = await categoryManage.delete(req.params.id);

        if(!category){
            return next(
                new ApiError(404, "Không tìm thấy danh mục !")
            );
        }
        return res.send({ message: "Danh mục đã được xóa thành công !" });
    }catch(error){
        return next(
            new ApiError(500, `Không thể xóa danh mục có id=${req.params.id}`)
        );
    }
};
