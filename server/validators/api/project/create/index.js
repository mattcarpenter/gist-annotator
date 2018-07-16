const Joi = require('joi');

module.exports = Joi.object().keys({
  projectName: Joi.string().required(),
  englishSrt: Joi.string().required(),
  japaneseSrt: Joi.string().required()
});
