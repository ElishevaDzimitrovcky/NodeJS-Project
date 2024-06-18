import mongoose from 'mongoose';

mongoose.set("strictQuery", false);

export default async function connect() {
    await mongoose.connect("mongodb+srv://eli701128:9x980T9MVp543CVy@dbnode.vcl8rdo.mongodb.net/NodeJSProject");
};