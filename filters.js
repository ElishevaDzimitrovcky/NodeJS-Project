export function filter(param){
    let query = { status: new RegExp('w', 'i') };
    let filter = [];

    if (param) {
        if (param.status) {
            query.status = new RegExp(param.status, 'i');
            console.log(query.status);
        }
        if (param.priority) {
            query.priority = new RegExp(params.priority, 'i')
        }

        if (param.location) {
            location = new RegExp(params.location, 'i')
            console.log(filter);
        }
    }

    const pipeline = [{ 'match': query }];
    if (filter.length) {
        pipeline.push({
            '$match': {
                '$or': filter
            }
        });
        pipeline.push({
            '$project': {
                'name': 1,
                'location': 1,
                'priority': 1,
                'status': 1
            }
        });
    }
    return pipeline;
}

export function byId(id) {
    const pipeline = [{'$match': { '_id': new ObjectId(id) }}];
    return pipeline;
}