var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
    res.render('test', {title: 'Egyanam Technical Services'});
});

router.get('/google616cfbadc2a5e097.html', function(req, res, next){
    res.render('google616cfbadc2a5e097');
});

// router.get('/bench', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/test', function(req, res, next){
//     res.render('test', {title: 'Test'});
// });

router.post('/mail', function(req, res, next){
    data = mail(req);
    res.json(data);
});

var mail = function(req){
    email = req.body.email;
    requirement = req.body.req;
    name = req.body.name;
    org = req.body.org;
    to_send = name + " - " + org;

    var nodemailer = require('nodemailer');
    var mg = require('nodemailer-mailgun-transport');

    var auth = {
        auth: {
            api_key: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN
        }
    };

    var nodeMailerMailgun = nodemailer.createTransport(mg(auth));
    nodeMailerMailgun.sendMail({
        from: email,
        to: process.env.MAIL_TO,
        subject: to_send,
        text: requirement
    },function (err, info) {
        if(err){
            console.log('Error: '+ err);
        } else {
            console.log('Response: '+ info);
        }
    });

    return {'email': email, 'name': name, 'org': org, 'requirement': requirement};
};

module.exports = router;
