import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    confirm_password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=authValidation.d.ts.map