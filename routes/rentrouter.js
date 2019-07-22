const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Rent = require('../models/rent');
var authenticate = require('../authenticate');

const rentRouter = express.Router();

rentRouter.use(bodyParser.json());

rentRouter.route('/')
.get((req,res,next) => {
    Rent.find({})
    .then((rent) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(rent);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Rent.create(req.body)
    .then((rent) => {
        console.log('Rentable Property Created ', rent);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(rent);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /rent');
})
.delete(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
    Rent.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

/*
dishRouter.route('/:buyId')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.put((req, res, next) => {
    Dishes.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, { new: true })
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Dishes.findByIdAndRemove(req.params.dishId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
*/

module.exports = rentRouter;