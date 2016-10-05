"use strict";
const User = require('../models/user');

var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
}

exports.updateInfo = function(req, res){
    var userId = req.user._id;
    console.log(req.body);
    if(userId){
        User.findById(userId, function(err, user){
            if(err){
                sendJSONresponse(res, 404, {
                    error : err
                });
                return;
            } else {
                user.profile.name = req.body.name;
                user.profile.lastname = req.body.lastname;
                user.finances.budget = req.body.budget;
                user.finances.savingGoal = req.body.savingGoal;
                user.finances.savingMonth = req.body.savingMonth;

                user.save(function(err, userSave){
                    if(err){
                        sendJSONresponse(res, 400, {
                            error : err
                        });
                        return;
                    } else {
                        sendJSONresponse(res, 200, {
                            user : {
                                email : userSave.email,
                                name : userSave.profile.name,
                                lastname : userSave.profile.lastname,
                                budget : userSave.finances.budget,
                                savingGoal : userSave.finances.savingGoal,
                                savingMonth : userSave.finances.savingMonth 
                            }
                        });
                    }
                })
            }
        })
    } else {
        sendJSONresponse(res, 404, {error : 'userid not found'});
    }
}