const router = require('express').Router();
const passport = require('passport');
require('../config/passport-setup');

// auth login
router.get('/login', (req,res)=> {
    res.render('login');
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope:['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res)=> {
    res.redirect('/profile');
});

//auth logout 
router.get('/logout', (res, req)=> {
    //handle with passport
    res.send('logging out user');
});



module.exports = router;