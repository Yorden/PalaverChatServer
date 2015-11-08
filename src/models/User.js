var crypto = require('crypto');
var mongoose = require('mongoose');

var userModel;
var iterations = 10000;
var saltLength = 64;
var keyLength = 64;

var UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: /^[A-Za-z0-9_\-\.]{1,16}$/
    },
  	salt: {
  		type: Buffer,
  		required: true
  	},
    password: {
        type: String,
        required: true
    },
    createdData: {
        type: Date,
        default: Date.now
    }

});

UserSchema.methods.toAPI = function() {
    //_id is built into your mongo document and is guaranteed to be unique
    return {
        username: this.username,
        _id: this._id
    };
};
//validates the password based on the crypto
UserSchema.methods.validatePassword = function(password, callback) {
	var pass = this.password;

	crypto.pbkdf2(password, this.salt, iterations, keyLength, function(err, hash) {
		if(hash.toString('hex') !== pass) {
			return callback(false);
		}
		return callback(true);
	});
};

UserSchema.statics.findByUsername = function(name, callback) {

    var search = {
        username: name
    };

    return userModel.findOne(search, callback);
};

UserSchema.statics.generateHash = function(password, callback) {
	var salt = crypto.randomBytes(saltLength);

	crypto.pbkdf2(password, salt, iterations, keyLength, function(err, hash){
		return callback(salt, hash.toString('hex'));
	});
}

UserSchema.statics.authenticate = function(username, password, callback) {
	return userModel.findByUsername(username, function(err, doc) {

		if(err)
		{
			return callback(err);
		}

        if(!doc) {
            return callback();
        }

        doc.validatePassword(password, function(result) {
            if(result === true) {
                return callback(null, doc);
            }

            return callback();
        });

	});
};

userModel = mongoose.model('User', UserSchema);


module.exports.userModel = userModel;
module.exports.userSchema = UserSchema;