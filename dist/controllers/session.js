const express = require('express');
const passport = require('passport');
const auth = require('./../middlewares/isAuth')
let user = require('./../helpers/user_db');
let router = express.Router();

router.post('/login', auth.isLogged,function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(200).send({
              status: info
            });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(500).send({
                  status: 'Could not log in user'
                });
            }
            res.status(200).send({
                status:200
            });
        });
    })(req, res, next);
});


router.post('/signup', auth.isLogged, (req, res, next) => {
    const { email, password, name, location } = req.body
    user.new(email, password, name, location).then(data => {
        res.send({
            status:200
        })
    }).catch(err => {
        res.send({
            status:"error"
        })
    })
});

router.get('/value', auth.isAuth, (req,res,next) => {
    res.send({session:req.session.passport, id:req.user.id, admin:req.user.admin});
});

router.get('/logout', auth.isAuth, (req, res) => {
    req.logout();
    res.status(200).send({
        status: 'Bye!'
    });
});

module.exports = router;