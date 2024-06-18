import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HelpRequest = new Schema({
    // id: String,
    location: String,
    description: String,
    phoneNumber: String,
    status: String,
    peopleStuck: String,
    priorityCode: String,
    volunteerCode: String,
});

const HelpRequestModel = mongoose.model('HelpRequestModel', HelpRequest, "HelpRequest");
export default HelpRequestModel;