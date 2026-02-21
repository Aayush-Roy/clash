import express from "express";
import type { Application, Request, Response } from "express";
import ejs from "ejs";
import "dotenv/config";
import path from "path"
import { fileURLToPath } from "url";
import { sendEmail } from "./config/mail.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app: Application = express();
const PORT = Number(process.env.PORT) || 7000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// set view engine

app.set("view engine","ejs")
app.set("views", path.resolve(__dirname,"./views"))

// app.get("/", async (req: Request, res: Response) => {
//   const html = await ejs.renderFile(__dirname+`/views/emails/welcome.ejs`,{name:"Aayush"});
//   await sendEmail("ar0671362@gmail.com","testinbg SMTP", html)
//   return res.json({msg:"Email send successfully"});
//   // return res.render("emails/welcome",{name:"Aayush"});
// });
app.get("/", async (req: Request, res: Response) => {
  try {
    // const html = await ejs.renderFile(
    //   __dirname + `/views/emails/welcome.ejs`,
    //   { name: "Aayush" }
    // );

    // await sendEmail("salic89233@bitoini.com", "testing SMTP", html);

    await emailQueue.add(emailQueueName,{name:"Aayush",age:24})
    return res.json({ msg: "Email sent successfully" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Email failed", err });
  }
});

// Queue
import "./jobs/index.js";
import { emailQueue, emailQueueName } from "./jobs/EmailJob.js";


app.listen(PORT, () => console.log(`app listening on ${PORT}`));
