"use strict";

const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user');
const config = require('../config/main');

function generateToken(user){
    return jwt.sign(user, config.secret, {
        expiresIn : 10080
    });
}

function setUserInfo(user){
    let getUserInfo = {
        _id : user._id,
        email : user.email
    };
    return getUserInfo;
}

exports.login = function(req, res, next){
    let userInfo = setUserInfo(req.user);
    res.status(200).json({
        token: 'JWT ' + generateToken(userInfo),
        user : userInfo
    });
}

exports.registerUser = function(req, res, next){
    if(!req.body.email || !req.body.password){
        res.status(401).json({
            error : "Es necesario ingresar email y contraseña"
        });
    } else {
        User.findOne({email:req.body.email}, function(err, existingUser){
            if(err) return next(err);
            if(existingUser){
                return res.status(422).send({
                    error : "Este email ya esta registrado."
                });
            }
            let user = new User({
                email : req.body.email,
                password : req.body.password
            });
            user.save(function(err, newUser){
                if(err) return next(err);
                let userInfo = setUserInfo(newUser);
                res.status(201).json({
                    token: 'JWT ' + generateToken(userInfo),
                    user : userInfo
                });
            });
        });
    }
}


