export default function filter(param) {
    const filter = [];
    if (param) {
        if (param.PriorityLevel) {
            filter.push({ '$match': { "PriorityLevel": param.PriorityLevel } })
        }
        if (param.location) {
            filter.push({ '$match': { "Location": param.location } })
        }
        if (param.Status) {
            filter.push({ '$match': { "Status": param.Status } })
        }
        else {
            filter.push({ '$match': { "Status": "waiting" } })
        }
    }
    return filter;
}
