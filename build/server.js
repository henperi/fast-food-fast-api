'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res, next) {
    return res.status(200).send({
        'message': 'Default endpoint is working well'
    });
});

//Define The Port and Host
var PORT = process.env.PORT || 5000;
var HOST = '0.0.0.0';
var CONCURRENCY = process.env.WEB_CONCURRENCY || 1;

//Start the node server
app.listen(PORT, HOST, function () {
    console.log('Server Runining Successfully On PORT: ' + PORT);
});