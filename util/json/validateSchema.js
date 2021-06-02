const Ajv = require("ajv");

const validateSchema = (schema, obj) => {
  const ajv = new Ajv.default({ allErrors: true });
  const validate = ajv.compile(schema);
  const isValid = validate(obj);
  
  return isValid;
}

module.exports = validateSchema;