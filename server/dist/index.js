import express from "express";
import "dotenv/config";
const app = express();
const PORT = Number(process.env.PORT) || 7000;
app.get("/", (req, res) => {
    return res.json({ msg: "Its working...." });
});
app.listen(PORT, () => console.log(`app listening on ${PORT}`));
//# sourceMappingURL=index.js.map