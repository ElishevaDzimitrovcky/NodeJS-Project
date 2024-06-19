import BaseController from "./BaseCntroller.js";
import service from "../services/HelpRequestService.js";

class HelpRequest extends BaseController {
    constructor(service) {
        super(service);
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = req.body;
            data.Status = "intreetment";
            const response = await this.service.update(id, data);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}

export default new HelpRequest(service);
