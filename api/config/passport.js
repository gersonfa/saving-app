const passport = require('passport');
const User = require('../models/user');
const config = require('./main');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const jwt = require('jsonwebtoken');

const localOptions = {
    usernameField: 'email',
    passwordField: 'password'
}

const localLogin = new LocalStrategy(localOptions, function(email, password, done){
    User.findOne({email : email}, function(err, user){
        if(err) return done(err);
        if(!user) return done(null, false, {error : 'Tu email no ha podido ser verificado.'});

        user.comparePassword(password, function(err, isMatch){
            if(err) return done(err);
            if(!isMatch) return done(null, false, {error : 'Email o contraseña incorrectos.'});
            return done(null, user);
        });
    });
});

const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromAuthHeader(),
    secretOrKey : config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    User.findById(payload._id, function(err, user){
        if(err) return done(err, false);
        if(user){
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
passport.use(localLogin);