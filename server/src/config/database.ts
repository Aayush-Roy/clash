// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient({
//   log: ["error", "query"],
//   errorFormat: "pretty",
// });

// export default prisma;
// import pkg from "@prisma/client";

// const { PrismaClient } = pkg;

// const prisma = new PrismaClient({
//   log: ["error", "query"],
//   errorFormat: "pretty",
// });

// export default prisma;
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient({
//   log: ["error", "query"],
//   errorFormat: "pretty",
// });

// export default prisma;
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ["error", "query"],
});

export default prisma;