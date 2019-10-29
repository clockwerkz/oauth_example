const router = require('express').Router();
const passport = require('passport');
require('../config/passport-setup');

// auth login
router.get('/login', (req,res)=> {
    res.render('login', {user: req.user});
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope:['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res)=> {
    res.redirect('/profile');
});

//auth logout 
router.get('/logout', (req, res)=> {
    //handle with passport
    req.logout();
    res.redirect('/');
});



module.exports = router;