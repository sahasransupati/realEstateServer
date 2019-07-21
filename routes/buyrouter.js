const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Buy = require('../models/buy');

const buyRouter = express.Router();

buyRouter.use(bodyParser.json());

buyRouter.route('/')
.get((req,res,next) => {
    Buy.find({})
    .then((buy) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(buy);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Buy.create(req.body)
    .then((buy) => {
        console.log('Buyable Property Created ', buy);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(buy);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /buy');
})
.delete((req, res, next) => {
    Buy.remove({})
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

module.exports = buyRouter;