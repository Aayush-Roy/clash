// import { ConnectionOptions, DefaultJobOptions } from "bullmq";
import pkg from 'bullmq';
const { ConnectionOptions, DefaultJobOptions } = pkg;
export const redisConnection = {
    host: process.env.REDIS_HOST,
    port: 6379,
};
export const defaultQueueOptions = {
    removeOnComplete: {
        count: 20,
        age: 60 * 60
    },
    attempts: 3,
    backoff: {
        type: "exponential",
        delay: 3000,
    }
};
//# sourceMappingURL=queue.js.map