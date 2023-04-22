const { ObjectId } = require("mongodb");

class ShiftManage{
    constructor(client){
        this.Shift = client.db().collection("shifts");
    }
    //định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractShiftData(payload){
        const shift = {
            name: payload.name,
            shift: payload.shift,
            date: payload.date
        };

        Object.keys(shift).forEach(
            (key) => shift[key] === undefined && delete shift[key]
        );
        return shift;
    }

    //phương thức create()
    async create(payload){
        const shift = this.extractShiftData(payload);
        const result = await this.Shift.findOneAndUpdate(
            shift,
            { $set: { favorite: shift.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }
    
    //shiftManage.find(condition) và shiftManage.findByName(name) => condition
    async find(filter){
        const cursor = await this.Shift.find(filter);
        return await cursor.toArray(); //chuyển đổi kq cho 1 array
    }
    async findByName(name){
        return await this.find({
            name: { $regex: new RegExp(name), $option: "i"},
        });
    }
    //định nghĩa phương thức tìm kiếm theo id
    async findById(id){
        return await this.Shift.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }
    //Phương thức update(id, document)
    async update(id, payload){
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractShiftData(payload);
        const result = await this.Shift.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument : "after" }
        );
        return result.value;
    }

    //Phương thức delete(id)
    async delete(id){
        const result = await this.Shift.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    
}

module.exports =  ShiftManage;


   




    


