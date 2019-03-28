'use strict';

const schema = require('./categories/categories-schema.js');

const uuid = require('uuid/v4');

class Categories {

  constructor() {
    this.database = [];
  }

  get(_id) {
    return new Promise = (resolve, reject) => {//uses a PROMISE as a response instead of another thing
    let response = _id 
    ? this.database.filter( record => record._id === parseInt(_id))
    : this.database;
      resolve(response);
    };
  };
  
  post(record) {
    record.id = uuid();
    if(this.validate(record)){
      this.database.push(record);
      return record;
    } else {
      return null;
    };
  };

  put(_id, record) {
    return new Promise = (resolve, reject) => {
    let response = _id
    ? this.database.filter( record => record._id === parseInt(_id))
    : this.database;

    //alter something
    
    resolve(response);
    }
  }

  delete(_id) {
    let response = _id
    ? this.database.filter( record => record._id === parseInt(_id))
    : this.database;

    //delete something
    return new Promise = (resolve, reject) => {
    let entry = read(_id)
    ? delete entry[_id]
    : this.database;
      resolve(response);
    }
  }

  validate(record){
    let valid = true;
    Object.keys(schema).forEach(field => {
      if(schema[field].required) {
        if(! record[field]) {
          valid = false;
        };
      };
    });
    return valid;
  };

};

module.exports = (Categories);