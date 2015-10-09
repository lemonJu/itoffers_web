var express = require('express');
var router = express.Router();
var options = {
    root: global.appDir + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

function reflect(fileName, req, res, next) {
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });
}

router.get('/', function(req, res, next) {
    reflect('pages/itoffers.html', req, res, next);
});

router.get('/proccess', function(req, res, next) {
    reflect('pages/proccess.html', req, res, next);
});

router.get('/travel', function(req, res, next) {
    reflect('pages/travel.html', req, res, next);
});

module.exports = router;
