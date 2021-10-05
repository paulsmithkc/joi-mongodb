# joi-mongodb
A simple Joi validator for MongoDB ObjectId.

## Install
```
npm install joi-mongodb
```

## Usage
In your application entry point (index.js/server.js/app.js):
```
const Joi = require('joi');
require('joi-mongodb')(Joi);
```

Then it can be used just like any other Joi type:
```
const schema = Joi.object({
  _id: Joi.objectId(),
  name: Joi.string(),
  date: Joi.date(),
});
```
