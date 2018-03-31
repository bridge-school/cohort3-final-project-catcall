import mongoose, { Schema } from 'mongoose';

export const reportSchema = new Schema({
    emotion: { type: Schema.Types.String },
    latitude: { type: Schema.Types.Number },
    longitude: { type: Schema.Types.Number }
}, { collection: 'catCall' });

export const Report = mongoose.model('catCall', reportSchema);
