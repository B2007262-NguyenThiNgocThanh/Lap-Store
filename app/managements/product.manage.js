const { ObjectId } = require("mongodb");

class ProductManage{
    constructor(client){
        this.Product = client.db().collection("products");
    }
    //định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractProductData(payload){
        const product = {
            name: payload.name,
            category: payload.category,
            price: payload.price,
            quantity: payload.quantity,
        }; 

        //remove undefined fields
        Object.keys(product).forEach(
            (key) => product[key] === undefined && delete product[key]
        );
        return product;  
    }

    //phương thức create()
    async create(payload){
        const product = this.extractProductData(payload);
        const result = await this.Product.findOneAndUpdate(
            product,
            { $set: { favorite: product.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }
    //productManage.find(condition) và productManage.findByName(name) => conditioncondition
    async find(filter){
        const cursor = await this.Product.find(filter);
        return await cursor.toArray(); //chuyển đổi kq cho 1 array
    }
    async findByName(name){
        return await this.find({
            name: { $regex: new RegExp(name), $option: "i"},
        });
    }
    //định nghĩa phương thức tìm kiếm theo id
    async findById(id){
        return await this.Product.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }
    
    //Phương thức update(id, document)
    async update(id, payload){
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractProductData(payload);
        const result = await this.Product.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument : "after" }
        );
        return result.value;
    }
    //Phương thức delete(id)
    async delete(id){
        const result = await this.Product.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }

}

module.exports =  ProductManage;







 