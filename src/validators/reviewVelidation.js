import Joi from 'joi';

const schema = Joi.object().keys(
  {
    name: Joi.string().required(),
    companyName: Joi.string().required(),
    description:Joi.string().required()
  },
);

const validate = (data) => {
  const result = schema.validate(data);
  result.value = data;
  return result;
};

export default validate;
