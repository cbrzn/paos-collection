const express = require('express');
const passport = require('passport');
const user = require('../helpers/user_db');
const auth = require('./../middlewares/isAuth')
const router = express.Router();

router.post('/login', auth.isLogged, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.send({
              status: info
            });
        }
        req.login(user,(err) => {
            if (err) {
                return res.send({
                  status: 'Could not log in user'
                });
            }
            res.send({
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