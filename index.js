const { ObjectId } = require('mongodb');

module.exports = (Joi) => {
  Joi.objectId = () =>
    Joi.any().custom((value, helpers) => {
      if (value === null) {
        throw new Error('ObjectId was null');
      } else if (typeof value !== 'string' && typeof value !== 'object') {
        throw new Error('ObjectId was wrong type');
      } else {
        try {
          return new ObjectId(value);
        } catch {
          throw new Error('ObjectId was invalid');
        }
      }
    }, 'objectId');
};
