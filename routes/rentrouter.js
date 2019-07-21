const express = require('express');
const bodyParser = require('body-parser');

const rentRouter = express.Router();

rentRouter.use(bodyParser.json());

rentRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the rentable properties to you!');
})
.post((req, res, next) => {
    res.end('Will add the property: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /rent');
})
.delete((req, res, next) => {
    res.end('Deleting all properties');
});

module.exports = rentRouter;