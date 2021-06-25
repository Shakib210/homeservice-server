import Joi from 'joi';

const schema = Joi.object().keys(
  {
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    service: Joi.string().required(),
    paymentMethod:Joi.string().required(),
    status: Joi.string().required()
  },
);

const validate = (data) => {
  const result = schema.validate(data);
  result.value = data;
  return result;
};

export default validate;
