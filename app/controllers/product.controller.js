// //sản phẩm
const ProductManage = require("../managements/product.manage");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

//create and save a new product
exports.createProduct = async (req, res, next) => {

    if(!req.body?.name){
        return next(new ApiError(400, "Name can not be empty"));
    }

    try{
        const productManage = new ProductManage(MongoDB.client);
        const product = await productManage.create(req.body);
        return res.send(product);
    }catch(error){
        return next(
            new ApiError(500, "Đã xảy ra lỗi khi truy xuất sản phẩm.")
        );
    }
};

//retrieve all product from the database
exports.findAllProduct = async (req, res, next) => {
    let products = [];

    try{
        const productManage = new ProductManage(MongoDB.client);
        const { name } = req.query;
        if (name){
            products = await productManage.findByName(name);
        }
        else{
            products = await productManage.find({});
        }
    }catch(error){
        return next(
            new ApiError(500, "Đã xảy ra lỗi khi truy xuất sản phẩm.")
        );
    }
    return res.send(products);
};

//find a single product with an id
exports.findOneProduct = async(req, res, next) => {
    try{
        const productManage = new ProductManage(MongoDB.client);
        const product = await productManage.findById(req.params.id);
        if(!product) {
            return next(new ApiError(404,"sản phẩm không tồn tại!"));
        }
        return res.send(product);
    }
    catch (error) {
        return next(
            new ApiError(500, `Đã xảy ra lỗi khi truy xuất sản phẩm với id = ${eq.params.id}`)
        );
    }
    
};

//Update a product by the id in the request
exports.updateProduct = async (req, res, next) => {
    if(Object.keys(req.body).length === 0){
        return next(new ApiError(400, "Dữ liệu cập nhật không thể rỗng !"));
    }
    
    try{
        const productManage = new ProductManage(MongoDB.client);
        const product = await productManage.update(req.params.id, req.body);
        if(!product) {
            return next(new ApiError(404,"Không tìm thấy sản phẩm !"));
        }
        return res.send({massage: "Sản phẩm được cập nhật thành công!"});
    }catch (error) {
        return next(
            new ApiError(500, `Đã xảy ra lỗi khi cập nhật sản phẩm với id=${req.params.id}`)
        );
    }
    
};

//Delete a product with the specified id in the request
exports.deleteProduct = async (req, res, next) => {
    try{
        const productManage = new ProductManage(MongoDB.client);
        const product = await productManage.delete(req.params.id);

        if(!product){
            return next(
                new ApiError(404, "Không tìm thấy sản phẩm")
            );
        }
        return res.send({ message: "sản phẩm đã được xóa thành công !" });
    }catch(error){
        return next(
            new ApiError(500, `Không thể xóa sản phẩm có id=${req.params.id}`)
        );
    }
   
};
