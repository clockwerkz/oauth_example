const router = require('express').Router();

// auth login
router.get('/login', (req,res)=> {
    res.render('login');
});

// auth with google
router.get('/google', (req, res)=> {
    // handle with passport
    res.send('logging in with Google');
});

//auth logout 
router.get('/logout', (res, req)=> {
    //handle with passport
    res.send('logging out user');
});



module.exports = router;