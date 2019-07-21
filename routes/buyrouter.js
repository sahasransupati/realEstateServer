const express = require('express');
const bodyParser = require('body-parser');

const buyRouter = express.Router();

buyRouter.use(bodyParser.json());

buyRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the buyable properties to you!');
})
.post((req, res, next) => {
    res.end('Will add the property: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /buy');
})
.delete((req, res, next) => {
    res.end('Deleting all properties');
});

module.exports = buyRouter;