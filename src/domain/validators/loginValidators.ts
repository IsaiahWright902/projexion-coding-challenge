import { z } from "zod";

export type LoginFormDTO = z.infer<typeof loginValidator>;

export const loginValidator = z.object({
  username: z.string().email().max(100).min(1),
  password: z.string().min(1),
});
