import BaseRepo from "./BaseRepo.js";
import volunteer from "../models/VolunteerModel.js"

class VolunteerRepo extends BaseRepo {
    constructor(module) {
        super(module);
    }

    async getAll() {
        try {
            const response = await this.module.find();
            return response;
        } catch (error) {
            throw error;
        }
    }

    async insert(data) {
        try {
            let item = await this.module.create(data)
            console.log("reached insert in repo", item)
            return item;
        }
        catch (errors) {
            console.log(errors.message);
        }
    }
}

export default new VolunteerRepo(volunteer);