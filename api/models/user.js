const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

userSchema.pre('save', function(next){
    const user = this;
    const SALT_FACTOR = 5;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err) return err;
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    });
}

module.exports = mongoose.model('User', userSchema);
