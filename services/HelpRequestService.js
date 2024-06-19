import repo from '../repository/HelpRequestRepo.js';
import BaseService from './BaseService.js';

class HelpRequestService extends BaseService {
    constructor(repo) {
        super(repo);
    }

    // async update(id, data) {
    //     try {
    //         const response = await this.repo.update(id, data);
    //         return response;
    //     } catch (error) {
    //         throw error;
        // }
    // }
}

export default new HelpRequestService(repo);