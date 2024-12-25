import Ajv from "ajv";
import addKeywords from "ajv-keywords";
import addFormats from "ajv-formats";
// import addErrors from 'ajv-errors';
import { AggregateAjvError } from "@segment/ajv-human-errors";

export async function validateData  (schema, data) {
  const ajv = new Ajv({ allErrors: true, verbose: true });
  addKeywords(ajv);
  addFormats(ajv);

  try {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
      const err = new AggregateAjvError(validate.errors);
      throw new Error(err.message);
    }
    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};
