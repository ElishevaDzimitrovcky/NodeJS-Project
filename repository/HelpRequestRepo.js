import BaseRepo from "./BaseRepo.js";
import HelpRequestModel from "../models/HelpRequestModel.js";
import connect from "./DB.js";
import addPipeLine from "../pipeline.js";
import { byId, filter} from '../filters.js'

class HelpRequestRepo extends BaseRepo {
    constructor(module) {
        super(module);
    }
}

export default new HelpRequestRepo(HelpRequestModel);