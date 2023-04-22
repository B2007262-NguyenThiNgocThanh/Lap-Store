const { ObjectId } = require("mongodb");

class StaffMange{
    constructor(client){
        this.Staff = client.db().collection("staffs");
    }
    //định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractStaffData(payload){
        const staff = {
            name: payload.name,
            email: payload.email,
            sex: payload.sex,
            position: payload.position,
            phone: payload.phone,
        };

        Object.keys(staff).forEach(
            (key) => staff[key] === undefined && delete staff[key]
        );
        return staff;
    }
    
    //phương thức create()
    async create(payload){
        const staff = this.extractStaffData(payload);
        const result = await this.Staff.findOneAndUpdate(
            staff,
            { $set: { favorite: staff.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }
     //staffManage.find(condition) và staffManage.findByName(name) => condition
    async find(filter){
        const cursor = await this.Staff.find(filter);
        return await cursor.toArray(); //chuyển đổi kq cho 1 array
    }
    async findByName(name){
        return await this.find({
            name: { $regex: new RegExp(name), $option: "i"},
        });
    }
    //định nghĩa phương thức tìm kiếm theo id
    async findById(id){
        return await this.Staff.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }
    //Phương thức update(id, document)
    async update(id, payload){
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractStaffData(payload);
        const result = await this.Staff.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument : "after" }
        );
        return result.value;
    }
    //Phương thức delete(id)
    async delete(id){
        const result = await this.Staff.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
}

module.exports =  StaffMange;

