import mongoose, { Schema, Decimal128 } from 'mongoose';

export const reportSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    userReport: { type: Schema.Types.String },
    latitude: { type: Schema.Types.Number },
    longitude: { type: Schema.Types.Number }
}, { collection: 'catCall' });

export const Report = mongoose.model('catCall', reportSchema);

export default reportSchema;