const { ObjectId } = require('mongodb');

module.exports = (Joi) => {
  Joi.objectId = () =>
    Joi.any().custom((value, helpers) => {
      try {
        if (!value) {
          throw new Error('ObjectId was falsy');
        } else if (typeof value !== 'string' && typeof value !== 'object') {
          throw new Error('ObjectId was wrong type');
        } else {
          return new ObjectId(value);
        }
      } catch {
        throw new Error('ObjectId was invalid');
      }
    }, 'objectId');
};
