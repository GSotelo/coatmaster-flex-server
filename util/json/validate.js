const Ajv = require("ajv");

const validateSchema = (schema, obj) => {
  const ajv = new Ajv.default({ allErrors: true });
  const validate = ajv.compile(schema);
  return validate(obj);
}

module.exports = validateSchema;