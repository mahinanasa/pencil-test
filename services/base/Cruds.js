/* eslint-disable linebreak-style */
/**
 * General cruds class
 */
 const { ObjectId } = require('mongoose').Types;

 class Cruds {
   constructor(Model, Schema = {}) {
     this.Model = Model;
     this.keys = Object.keys(Schema);
   }
 
   async create(params, returnOnlyId = false) {
     const newObj = new this.Model({...params });
     if (!returnOnlyId) {
       return newObj.save();
     }
 
     const result = await newObj.save();
     return { _id: result.id };
   }
 
   async find(params = {}, projection = {}, options = {}) {
     return this.Model.find(params, projection, {...options });
   }

   async findIndexed(params = {}, projection = {}, options = {}) {
     return await this.Model.find({ $text: { $search: params.q } },{},{lean:1});
   }
 
   async findOne(params = {}, projection = {}, options) {
     return this.Model.findOne(params, projection, options);
   }
 
   async findById(id, projection) {
     if (projection) return this.Model.findById(id, projection);
     return this.Model.findById(id);
   }
 }
 
 module.exports = Cruds;
 