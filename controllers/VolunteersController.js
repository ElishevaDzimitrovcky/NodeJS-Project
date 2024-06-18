import BaseController from "./BaseCntroller.js";
import VolunteerService from "../services/VolunteerService.js";

class VolunteersController extends BaseController{
    constructor(module) {
        super(module);
    }
}

export default new VolunteersController(VolunteerService);