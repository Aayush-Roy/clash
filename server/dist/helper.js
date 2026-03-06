import { ZodError } from "zod";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const formatError = (error) => {
    let errors = {};
    error.errors?.map((issue) => {
        errors[issue.path?.[0]] = issue.message;
    });
};
export const renderEmailEjs = async (fileName, payload) => {
    const html = await ejs.renderFile(__dirname + `/views/emails/${fileName}.ejs`, payload);
    return html;
};
//# sourceMappingURL=helper.js.map