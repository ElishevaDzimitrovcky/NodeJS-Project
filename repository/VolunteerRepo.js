import BaseRepo from "./BaseRepo.js";
import volunteer from "../models/VolunteerModel.js"

class VolunteerRepo extends BaseRepo {
    constructor(module) {
        super(module);
    }
}

export default new VolunteerRepo(volunteer);