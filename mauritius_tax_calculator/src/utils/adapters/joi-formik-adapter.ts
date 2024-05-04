import Joi, { AsyncValidationOptions } from "joi";

export class ValidationError extends Error {
  public name = "ValidationError";
  public inner: Array<{ path: string; message: string }> = [];
  public constructor(message: string) {
    super(message);
  }
}

function createErrorSchema(e: Joi.ValidationError) {
  const error = new ValidationError(e.message);
  error.inner = e.details.map((err) => ({
    message: err.message,
    path: err.path.join("."),
  }));
  return error;
}

export function joiFormikAdapter<T>(
  schema: Joi.ObjectSchema,
  options: AsyncValidationOptions = { abortEarly: false, allowUnknown: true }
) {
  return {
    async validate(obj: T) {
      try {
        await schema.validateAsync(obj, options);
      } catch (err: any) {
        throw createErrorSchema(err as Joi.ValidationError);
      }
    },
  };
}
