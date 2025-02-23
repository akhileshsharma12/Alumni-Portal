import { Router } from "express";
import { register, login } from "../controller/user.controller.js";

const router = Router();

// register route
router.post("/register", register)
// login route
router.post("/login",login);

export default router;