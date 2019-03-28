'use strict';

const schema = require('./products/products-schema.js');

const uuid = require('uuid/v4');

// const schema = {
// };

class Products {

  constructor() {
    this.database = [];
  }

  get(id) {
    return new Promise = (resolve, reject) => {//uses a PROMISE as a response instead of another thing
      let response = _id 
      ? this.database.filter( record => record._id === parseInt(_id))
      : this.database;
        resolve(response);
    };
  }
  
  post(entry) {
  }

  put(id, entry) {
  }

  delete(id) {
  }

  // sanitize(entry) {
  // }

}

module.exports = Products;