import { Queue, Worker } from "bullmq";
export declare const emailQueueName = "emailQueue";
export declare const emailQueue: Queue<any, any, string, any, any, string>;
export declare const queueWorker: Worker<any, any, string>;
//# sourceMappingURL=EmailJob.d.ts.map