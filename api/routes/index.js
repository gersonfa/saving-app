const express = require('express');
const passportService = require('../config/passport');
const passport = require('passport');

const AuthenticationCtrl = require('../controllers/authentication');
const ExpenseCtrl = require('../controllers/expense');

const requireAuth = passport.authenticate('jwt', { session : false});
const requireLogin = passport.authenticate('local', { session: false});

module.exports = function(app){
    
    const apiRoutes = express.Router(),
          authRoutes = express.Router(),
          expenseRouter = express.Router()

    apiRoutes.use('/auth', authRoutes);
    authRoutes.post('/register', AuthenticationCtrl.registerUser);
    authRoutes.post('/login', requireLogin, AuthenticationCtrl.login);

    apiRoutes.use('/expense', expenseRouter);
    expenseRouter.get('/',requireAuth, ExpenseCtrl.expenseGetAll);
    expenseRouter.post('/',requireAuth, ExpenseCtrl.expenseCreate);
    expenseRouter.put('/:expenseid',requireAuth, ExpenseCtrl.expenseUpdate);
    expenseRouter.delete('/:expenseid',requireAuth, ExpenseCtrl.expenseDelete); 


    app.use('/api', apiRoutes);
};


