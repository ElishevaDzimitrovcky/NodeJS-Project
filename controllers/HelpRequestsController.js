import BaseController from "./BaseCntroller.js";
import service from "../services/HelpRequestService.js";

class HelpRequest extends BaseController {
    constructor(service) {
        super(service);
    }
}

export default new HelpRequest(service);
