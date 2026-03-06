import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
    log: ("query" | "error")[];
}, "query" | "error", import("@prisma/client/runtime/client").DefaultArgs>;
export default prisma;
//# sourceMappingURL=database.d.ts.map