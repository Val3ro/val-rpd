import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(3770),
  STAGE: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.string().default(5432).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  CHAR_HOST: Joi.string().required(),
  CHAR_PORT: Joi.number().required(),
  CHAR_USERNAME: Joi.string().required(),
  CHAR_PASSWORD: Joi.string().required(),
  CHAR_DATABASE: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});
