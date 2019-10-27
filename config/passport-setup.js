const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/User');

passport.serializeUser((user, done)=> {
    done(null, user.id);
});

passport.deserializeUser(async (id, done)=> {
    const user = await User.findById(id);
    done(null, user);
})

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, async (accessToken, refreshToken, profile, done)=> {
        // passport cb function
        try 
        {
            const existingUser = await User.findOne({ googleId : profile.id });
            if (existingUser) {
                console.log(existingUser);
                done(null, existingUser);
            } else {
                const user = await new User({
                    username: profile.displayName,
                    googleId: profile.id
                });
                console.log(user);
                done(null, user);
            }
        }
        catch(err) 
        {
            console.log('Error:', err);
        }
    })
);