require('../../app/database');
const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const {resolve} = require('../../webpack.config');
mongoose.plugin(slug);
const ProductSchema = mongoose.Schema({
  name: {type: String},
  size: {type: String},
  scientifiqueName: {type: String},
  // scientifiqueName: {type: String, match: /^[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž-]+$/i},
  commonName: {type: String},
  family: {type: String},
  origin: {type: String},
  location: {type: String},
  description: {type: String},
  exposure: {type: String},
  watering: {type: String},
  repotting: {type: String},
  price: {type: Number}
}, {versionKey: false});

module.exports = class Product {
  constructor() {
    this.db = mongoose.model('Products', ProductSchema);
  }

  add(productEntity) {
    return new Promise((resolve, reject) => {
      this.db.create(productEntity, (err, product) => {
        if (err) reject(err);
        resolve(product);
      })
    })
  }

  delete(filter = {}) {
    return new Promise((resolve, reject) => {
      this.db.deleteOne(filter, err => {
        if (err) reject(err)
        resolve();
      })
    })
  }

  find(search = {}) {
    return new Promise((resolve, reject) => {
      this.db.find(search, (err, product) => {
        if (err) reject(err);
        resolve(product);
      })
    })
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      this.db.findById(id, (err, product) => {
        if (err || product === null) reject();
        resolve(product);
      })
    })
  }

  update(id, product) {
    console.log('testid', id);
    return new Promise((resolve, reject) => {
      this.db.findByIdAndUpdate(id, product, {},(err, product) => {
        if (err) reject(err);
        resolve(product);
      })
    })
  }
}