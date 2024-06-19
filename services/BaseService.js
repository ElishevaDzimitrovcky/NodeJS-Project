class BaseService {
    constructor(repo) {
        this.repo = repo;
    }

    async getAll(filter) {
        return await this.repo.getAll(filter);
    }

    async getById(id) {
            let response = await this.repo.getById(id);
            return response;
    }

    // async insert(newData) {
    //     try {
    //         let response = await this.repo.insert(newData);
    //         console.log(`Inserted id: why`, newData);
    //         return response;
    //     }
    //     catch (error) {
    //         next(error);
    //     }
    // }
}

export default BaseService;