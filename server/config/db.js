import mongoose from 'mongoose';

const {
    DB_PASS,
    DB_USER,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env;

const connectionUrl = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

export default () => mongoose.connect(connectionUrl)
    .then(() => {
        // Get the default connection
        const db = mongoose.connection;

        // Bind connection to 'error' event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        return db;
    })
    .catch(err => {
        // We were unable to connect! Oh no!
        console.log(err); // let's log the error
        process.exit(-1); // and get the current process to exit
    });