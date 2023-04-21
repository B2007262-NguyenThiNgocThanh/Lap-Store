// //sản phẩm
// const MongoDB = require("../utils/mongodb.util");
// const ApiError = require("../api-error");
// const ProductManage = require("../managements/product.manage");

// //create and save a new product
// exports.createProduct = async (req, res, next) => {

//     if(!req.body?.productName){
//         return next(new ApiError(400, "Name can not be empty"));
//     }

//     try{
//         const productManage = new ProductManage(MongoDB.client);
//         const product = await productManage.create(req.body);
//         return res.send(product);
//     }catch(error){
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất sản phẩm.")
//         );
//     }
// };

// //retrieve all product from the database
// exports.findAllProduct = async (req, res, next) => {
//     let products = [];

//     try{
//         const productManage = new ProductManage(MongoDB.client);
//         //const products = await productService.find();
//         // return res.status(201).json({
//         //     success: true,
//         //     products,
//         // });

//         const { name } = req.query;
//         if (name){
//             products = await productManage.findByName(name);
//         }
//         else{
//             products = await productManage.find({});
//         }
//     }catch(error){
//         return next(
//             new ApiError(500, "Đã xảy ra lỗi khi truy xuất sản phẩm.")
//         );
//     }
//     return res.send(products);
// };

// //find a single lap with an id
// exports.findOneProduct = async(req, res, next) => {
//     try{
//         const productManage = new ProductManage(MongoDB.client);
//         const product = await productManage.findById(req.params.id);
//         if(!product) {
//             return next(new ApiError(404,"sản phẩm không tồn tại!"));
//         }
//         return res.send(product);
//     }
//     catch (error) {
//         return next(
//             new ApiError(500, `Đã xảy ra lỗi khi truy xuất sản phẩm với id = ${eq.params.id}`)
//         );
//     }
    
//     // try{
//     //     res.status(200).json({
//     //         success: true,
//     //         product,
//     //     })
    
// };

// //Update a product by the id in the request
// exports.updateProduct = async (req, res, next) => {
//     if(Object.keys(req.body).length === 0){
//         return next(new ApiError(400, "Dữ liệu cập nhật không thể rỗng !"));
//     }
//     // let product = Product.findById(req.params.id);
//     // if(!product) {
//     //     return next(new ApiError(404,"Sản phẩm không tồn tại!"));
//     // }
//     try{
//         const productManage = new ProductManage(MongoDB.client);
//         product = await productManage.findByIdAndUpdate(req.params.id, req.body);
//         if(!product) {
//             return next(new ApiError(404,"Không tìm thấy sản phẩm !"));
//         }
//         return res.send({massage: "Sản phẩm được cập nhật thành công!"});
//         // res.status(200).json({
//         //     success: true,
//         //     product,
//         //     message: "Sản phẩm được cập nhật thành công!"
//         // })
//     }catch (error) {
//         return next(
//             new ApiError(500, `Đã xảy ra lỗi khi cập nhật sản phẩm với id = ${eq.params.id}`)
//         );
//     }
    
// };

// //Delete a product with the specified id in the request
// exports.deleteProduct = async (req, res, next) => {
//     try{
//         const productManage = new ProductManage(MongoDB.client);
//         const product = await productManage.delete(req.params.id);

//         if(!product){
//             return next(
//                 new ApiError(404, "Không tìm thấy sản phẩm")
//             );
//         }
//         return res.send({ message: "sản phẩn đã được xóa thành công !" });
//     }catch(error){
//         return next(
//             new ApiError(
//                 500,
//                 `Không thể xóa sản phẩm có id=${req.params.id}`
//             )
//         );
//     }
   
// };


exports.createProduct = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAllProduct = (req, res) => {
    res.send({ message: "findAll handler" });
};

exports.findOneProduct = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.updateProduct = (req, res) => {
    res.send({ message: "update handler" });
};


exports.deleteProduct = (req,  res) => {
    res.send({ message: "delete handler" });
};
