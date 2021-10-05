const { ObjectId } = require('mongodb');

module.exports = (Joi) => {
  Joi.objectId = () =>
    Joi.any()
      .custom((value, helpers) => {
        try {
          if (!value) {
            throw new Error('ObjectId was falsy');
          } else if (typeof value !== 'string' && typeof value !== 'object') {
            throw new Error('ObjectId was wrong type');
          } else {
            return new ObjectId(value);
          }
        } catch {
          return helpers.error('any.objectId');
        }
      }, 'ObjectId')
      .rule({
        message: {
          'any.objectId': '{#label} was not a valid ObjectId',
        },
      });
};
