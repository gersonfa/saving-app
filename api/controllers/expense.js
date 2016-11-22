"use strict";
const Expense = require('../models/expense');

var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
}

exports.expenseGetAll = function(req, res, next){
    var userId = req.user._id;
    if(userId){
        Expense.find({userId: userId}, function(err, expenses){
            if(err) {
                sendJSONresponse(res, 400, {
                    error : err
                });
                return;
            } else{
                sendJSONresponse(res, 201, expenses);
            }
        });
    }
};

exports.expenseCreate = function(req, res){
    var userId = req.user._id;
    if(userId){
        if(req.body.category && req.body.description && req.body.amount){
            let expense = new Expense({
                category : req.body.category,
                description : req.body.description,
                amount : req.body.amount,
                userId : userId
            });

            expense.save(function(err, newExpense){
                if(err){
                    sendJSONresponse(res, 400, {
                        error : err
                    });
                    return;
                } else {
                    sendJSONresponse(res, 201, newExpense);
                }
            })
        } else {
            sendJSONresponse(res, 404, {
                message : 'Categoria, descripcion y costo son necesarios'
            });
        }
    }
};

exports.expenseUpdate = function(req, res){
    var userId = req.user._id;
    var expenseId = req.params.expenseid;

    if(userId && expenseId){
        Expense.findById(expenseId, function(err, expense){
            if(err) {
                sendJSONresponse(res, 400, {
                    error : err
                });
                return;
            } else if(expense.userId === userId){
                expense.category = req.body.category;
                expense.description = req.body.description;
                expense.amount = req.body.amount;
                expense.save(function(err, saveExpense){
                    if(err){
                        sendJSONresponse(res, 400, {
                            error : err
                        });
                    } else {
                        sendJSONresponse(res, 201, saveExpense);
                    }
                })
            } else {
                sendJSONresponse(res, 400, {
                    error: 'you re not authorized to update this expense'
                });
            }
        })
    } else {
        sendJSONresponse(res, 400, {
            message : 'expenseid is required'
        });
    }
}

exports.expenseDelete = function(req, res){
    var userId = req.user._id;
    var expenseId = req.params.expenseid;

    if(userId && expenseId){
        Expense.findById(expenseId, function(err, expense){
            if(err) {
                sendJSONresponse(res, 400, {
                    error : err
                });
                return;
            }
            if(expense._id.equals(req.user._id)){
                sendJSONresponse(res, 400, {
                    message : 'You are not authorized to delete this expense'
                });
            } else {
                Expense.findByIdAndRemove(expenseId)
                       .exec(function(err, deleteExpense){
                           if(err){
                               sendJSONresponse(res, 400, {
                                   error : err
                               });
                               return;
                           } else {
                               sendJSONresponse(res, 204, null);
                           }
                       });
            }
        });
    } else {
        sendJSONresponse(res, 400, {
            message : 'expenseid is required'
        });
    }
};
