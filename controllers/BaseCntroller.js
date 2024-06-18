import autoBind from 'auto-bind';

class BaseController {
    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next) {
        try {
            const response = await this.service.getAll(req.query);
            if (response) { 
                return res.status(200).json(response); 
            }
            return res.status(404).json({ message: 'Not Found' });
        }
        catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.getById(id);
            if (response) { 
                return res.status(200).json(response); 
            }
            return res.status(404).json({ message: 'Not Found' });
        }
        catch (error) {
            next(error);
        }
    }

    async insert(req, res, next) {
        try {
            const response = await this.service.insert(req.body);
            if (response) { 
                return res.status(201).json(response); 
            }
            return res.status(404).json({ message: 'Not Found' });
        }
        catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            if (response) { 
                return res.status(200).json(response); 
            }
            return res.status(404).json({ message: 'Not Found' });
        }
        catch (error) {
            next(error);
        }
    }
    
    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.delete(id);
            if (response) { 
                return res.status(200).json(response); 
            }
            return res.status(404).json({ message: 'Not Found' });
        }
        catch (error) {
            next(error);
        }
    }
}

export default BaseController;