const { z } = require("zod");

const signupSchema = z
  .object({
    username: z.string().min(4).max(15),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string(),
  })
  .strict();

const loginSchema = z
  .object({
    username: z.string(),
    password: z.string(),
  })
  .strict();

const signupSchemaValidator = async (data) => {
  const { success } = await signupSchema.safeParse(data);
  return success;
};

const loginSchemaValidator = async (data) => {
  const { success } = await loginSchema.safeParse(data);
  return success;
};

module.exports = { signupSchemaValidator, loginSchemaValidator };
