import { ZodError } from "zod";
export const formatError = (error) => {
    let errors = {};
    error.errors?.map((issue) => {
        errors[issue.path?.[0]] = issue.message;
    });
};
//# sourceMappingURL=helper.js.map