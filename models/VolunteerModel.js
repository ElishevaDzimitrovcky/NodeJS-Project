import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    firstName:String,
    LastName:String,
    ListOfSpecialization:Object
});

const Volunteer = mongoose.model('VolunteersModel', VolunteerSchema, "Volunteer");
export default Volunteer;