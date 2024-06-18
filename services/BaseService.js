class BaseService {
    constructor(repo) {
        this.repo = repo;
    }

    async getAll() {
        // try {
        //     const response = await this.options.getList(req.query);
        //     return response.status(response.statusCode).json(response);
        // } catch (error) {
        //    next(error);
        // }
        return await this.repo.getAll();
    }

    async getById() {
        try {
            const { id } = req.params;
            const response = await this.options.getById(id);
            return response.status(response.statusCode).json(response);
        } catch (error) {
            next(error);
        }
    }

    async insert(newData) {
        try {
            const response = await this.options.create(newData.body);
            return response.status(response.statusCode).json(response);
        }
        catch (error) {
            next(error);
        }
    }
}

export default BaseService;