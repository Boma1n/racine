require('../../app/database.js');
const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
  civility : {type: String, match: /^[1-3]{1}$/},
  firstname: {type: String, match: /^[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž-]+$/i},
  lastname: {type: String, match: /^[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž-]+$/i},
  email : {type: String},
  password : {type: String, match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!.%&*?])[A-Za-z\d#$@!%.&*?]{8,}$/},
  phone: {type: String, match: /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/},
  admin: {type: Boolean}
}, {versionKey: false});

module.exports = class User {
  constructor() {
    this.db = mongoose.model('User', UserSchema);
  }

  add (userEntity) {
    return new Promise((resolve, reject) => {
      this.db.create(userEntity, (err, user) => {
        if (err) reject(err);
        resolve(user);
      })
    })
  }

  emailExists(email) {
    return new Promise((resolve, reject) => {
      this.db.findOne({ email }, (err, user) => {
        if (!err && user !== null) {
          resolve(true);
        }
        resolve(false);
      })
    })
  }

  getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      this.db.findOne({email}, (err, user) => {
        if (!err && user !== null) {
          resolve(user);
        }
        reject(false);
      })
    })
  }
}
