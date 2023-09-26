//

import express from "express";

import userController from "../controllers/user.controller.js";

const user_router = express.Router();

user_router.get("/", userController.getAll);

user_router.post("/post", userController.postUser);

export { user_router };
