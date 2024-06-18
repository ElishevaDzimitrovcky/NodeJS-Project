import connect from "./DB.js";

class BaseRepo {
    constructor(module) {
        this.module = module;
        connect();
    }

    async getAll() {
        return this.module.find({}).exec();
        // return Promise.resolve("start running");
        // let { skip, limit, sortBy } = query;
        // skip = skip ? Number(skip) : 0;
        // limit = limit ? Number(limit) : 10;
        // sortBy = sortBy ? sortBy : { createdAt: -1 };

        // delete query.skip;
        // delete query.limit;
        // delete query.sortBy;

        // if (query._id) {
        //     try {
        //         query._id = new mongoose.mongo.ObjectId(query._id);
        //     } catch (error) {
        //         throw new Error('Not able to generate mongoose id with content');
        //     }
        // }

        // try {
        //     let items = await this.model
        //         .find(query)
        //         .sort(sortBy)
        //         .skip(skip)
        //         .limit(limit);

        //     let total = await this.model.countDocuments(query);

        //     return new HttpResponse(items, { totalCount: total });
        // } catch (errors) {
        //     throw errors;
        // }
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

    async insert(data) {
        try {
            let item = await this.module.create(data);
            if (item) {
                return item;
            }
            else { throw new Error('Not able to insert data'); }
        }
        catch (error) {
            throw error;
        }

    }

    async update(id, data) {
        try {
            let item = await this.module.findByIdAndUpdate(id, data, { new: true });
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

    async delete(id) {
        try {
            let item = await this.module.findByIdAndDelete(id);
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
}

export default BaseRepo;