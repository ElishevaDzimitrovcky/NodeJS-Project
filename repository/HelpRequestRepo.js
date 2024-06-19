import BaseRepo from "./BaseRepo.js";
import HelpRequestModel from "../models/HelpRequestModel.js";

class HelpRequestRepo extends BaseRepo {
    constructor(module) {
        super(module);
    }


    // async getAll() {
    //     const pipeline = addPipeline();
    //     const responseAggregation = await this.module.aggregate(pipeline).exec();
    //     return responseAggregation;
    // }

    // async getById(id) {
    //     try {
    //         for (const i in pipeline) {
    //             pipeline.slice(0, pipeline.length, i)
    //         }
    //         const pipeline = addPipeline();
    //         const response = await this.module.aggregate(pipeline).byId().exec();
    //         if (!req) {
    //             let error = new Error('req is not found');
    //             error.statusCode = 404;
    //             throw error;
    //         }
    //         return response;
    //     }
    //     catch (errors) {
    //         console.log(errors.message);
    //         throw new Error('An error occurred while retrieving the request. Please try again later');
    //     }
    // }

    // async getById(id) {
    //     await connect();
    //     const pipeline = addPipeLine(filter());
    //     return HelpRequestModel.aggregate(pipeline, byId(id));
    // }

    async update(id, newData) {
        try {
            const response = await this.module.findByIdAndUpdate(id, newData);
            return response;
        }
        catch (error) {
            console.log(error.message);
            throw new Error("An error occurred while trying to update the request's status. Please try again later.");
        }
    }
}

export default new HelpRequestRepo(HelpRequestModel);