import BaseController from "./BaseCntroller.js";
import VolunteerService from "../services/VolunteerService.js";

class VolunteersController extends BaseController{
    constructor(module) {
        super(module);
    }

    // async add(req, res, next) {
    //     try {
    //         const response = await this.service.add(req.body);
    //         return res.status(200).json(response);
    //     }
    //     catch (e) {
    //         next(e);
    //     }
    // }
}

export default new VolunteersController(VolunteerService);