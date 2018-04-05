import express from 'express';

import { Report } from '../models/reportModel';

const router = express.Router();

/* GET someModels listing. */
router.get('/', function (req, res, next) {

    return Report
        // we are providing the empty object to mean we are not giving any constraints -- we want them all!
        .find({})
        .then(
            results => {
                res
                    .status(200) // explicitly set the status code to 200 to indicate the request was successful
                    .send(results)
            }
        )
        .catch(err => next(err)); // if we get an error, propagate the error to the next middleware
});

/* POST a someModel. (This will create one in the database, if successful) */
router.post('/report', function (req, res, next) {
    const reportIncident = new Report({
        emotion: req.body.emotion,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });

    reportIncident.save()
        .then(
            () => res
                .status(201) // explicitly set the status code to 201 to indicate an entry was successfully created
                .send(`Successfully created the model!`)
        )
        .catch(err => next(err));
});

/* DELETE a someModel. (This will remove one in the database, if successful) */
router.delete('/:name', function (req, res, next) {
    Report.remove({ name: req.params.name })
        .then(
            () => res
                .status(200) // explicitly set the status code to 201 to indicate the request was successful
                .send(`Successfully removed the model with name '${req.params.name}'! Try and view all the models now!`)
        )
        .catch(err => next(err)); // if we get an error, propagate the error to the next middleware
});

export default router;
