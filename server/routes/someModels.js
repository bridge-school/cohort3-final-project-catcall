import express from 'express';

import SomeModel from '../models/someModel';

const router = express.Router();

/* GET someModels listing. */
router.get('/', function(req, res, next) {
    return SomeModel
        // we are providing the empty object to mean we are not giving any constraints -- we want them all!
        .find({})
        .then(
            someModels => res
                .status(200) // explicitly set the status code to 200 to indicate the request was successful
                .send(someModels)
        )
        .catch(err => next(err)); // if we get an error, propagate the error to the next middleware
});

/* POST a someModel. (This will create one in the database, if successful) */
router.post('/:name', function(req, res, next) {
    const someModel = new SomeModel({ name: req.params.name });

    someModel.save()
        .then(
            () => res
                .status(201) // explicitly set the status code to 201 to indicate an entry was successfully created
                .send(`Successfully created the model with name '${req.params.name}'! Try and view all the models now!`)
        )
        .catch(err => next(err));
});

/* DELETE a someModel. (This will remove one in the database, if successful) */
router.delete('/:name', function(req, res, next) {
    SomeModel.remove({name: req.params.name})
        .then(
            () => res
                .status(200) // explicitly set the status code to 201 to indicate the request was successful
                .send(`Successfully removed the model with name '${req.params.name}'! Try and view all the models now!`)
        )
        .catch(err => next(err)); // if we get an error, propagate the error to the next middleware
});

export default router;

