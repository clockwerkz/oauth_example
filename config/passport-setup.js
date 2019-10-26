const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/User');

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done)=> {
        // passport cb function
        new User({
            username: profile.displayName,
            googleId: profile.id
        }).save()
        .then((user)=> {
            console.log(user);
            done();
        })
        .catch(err => {
            console.log('Error:', err);
        })
    })
);