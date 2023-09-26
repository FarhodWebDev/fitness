//

import express from "express";

import { user_router } from "./routers/users.router.js";
import client from "./connectDB.js";

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
 console.log("Connected...");
 console.log("server running on 8080");
});

app.use("/users", user_router);

app.get("/", (req, res) => {
 res.json(req.query);
});
