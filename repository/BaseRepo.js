import connect from "./DB.js";
import filter from "../filters.js";
import aggregation from "./pipeline.js";

class BaseRepo {
    constructor(module) {
        this.module = module;
        connect();
    }

    async getAll(param) {
        let subPipeline = filter(param);
        let agg = aggregation(subPipeline);
        let info= await this.module.aggregate(agg).exec();
        return info;
    }

    async getById(id) {
        try {
            let item = await this.module.findById(id);
            if (!item) {
                let error = new Error('Not found');
                error.status = 404;
                throw error;
            }
            return item;
        }
        catch (error) {
            throw error;
        }
    }

    // async update(id, data) {
    //     try {
    //         let item = await this.module.findByIdAndUpdate(id, data, { new: true });
    //         if (!item) {
    //             let error = new Error('Not found');
    //             error.status = 404;
    //             throw error;
    //         }
    //         return item;
    //     }
    //     catch (error) {
    //         throw error;
    //     }
}

export default BaseRepo;