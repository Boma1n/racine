require('../../app/database.js');
const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
  civility : {type: String, match: /^[1-2]{1}$/},
  firstname: { type: String, match: /^[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž-]+$/i },
  lastname: { type: String, match: /^[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž-]+$/i },
  email : {  type: String },
  password : { type: String },
  phone: { type: String, match: /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/ },
}, { versionKey: false });

module.exports = class User {
  constructor() {
    this.db = mongoose.model('User', UserSchema);
  }

  add(userEntity) {
    return this.db.create(userEntity);
  }
}
