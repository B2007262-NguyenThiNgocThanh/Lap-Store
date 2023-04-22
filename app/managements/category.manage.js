const { ObjectId } = require("mongodb");

class CategoryManage{
    constructor(client){
        this.Category = client.db().collection("category");
    }
    //định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractCategoryData(payload){
        const category = {
            id: payload.id,
            name: payload.name,
        };

        Object.keys(category).forEach(
            (key) => category[key] === undefined && delete category[key]
        );
        return category;
    }

    //phương thức create()
    async create(payload){
        const category = this.extractCategoryData(payload);
        const result = await this.Category.findOneAndUpdate(
            category,
            { $set: { favorite: category.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }
    //categoryManage.find(condition) và categoryManage.findByName(name) => condition
    async find(filter){
        const cursor = await this.Category.find(filter);
        return await cursor.toArray(); //chuyển đổi kq cho 1 array
    }
    async findByName(name){
        return await this.find({
            name: { $regex: new RegExp(name), $option: "i"},
        });
    }
    
    //định nghĩa phương thức tìm kiếm theo id
    async findById(id){
        return await this.Category.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }
     //Phương thức delete(id)
     async delete(id){
        const result = await this.Category.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
}

module.exports =  CategoryManage;  


