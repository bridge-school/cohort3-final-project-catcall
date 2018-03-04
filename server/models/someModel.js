import mongoose, { Schema } from 'mongoose';

export const someModelSchema = new Schema({
    name: {
        type: String
    }
});

export const SomeModel = mongoose.model('SomeModel', someModelSchema);

export default SomeModel;