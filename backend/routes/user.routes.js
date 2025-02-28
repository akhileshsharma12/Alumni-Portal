import { Router } from "express";
import { register, login, getUser, logout } from "../controller/user.controller.js";

const router = Router();

// register route
router.post("/register", register)
// login route
router.post("/login",login);

router.post("/logout",logout);

//decode jwt and send payload data to frontend
router.get("/get-user",getUser);

export default router;