var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

/* GET home page. */
router.get('/', function(req, res, next){
    res.render('coming');
});

router.get('/bench', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next){
    res.render('test', {title: 'Test'});
});

router.get('/testmail', function(req, res, next){
    res.render('mail');
});

router.post('/mail', function(req, res, next){
    email = req.body.email;
    message = req.body.message;
    name = req.body.name;
    subject = req.body.subject;

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
        subject: subject,
        text: message+"<br>"+name
    },function (err, info) {
        if(err){
            console.log('Error: '+ err);
        } else {
            console.log('Response: '+ info);
        }
    });

    res.json({'email': email, 'text': text, 'name': name});
});

module.exports = router;
