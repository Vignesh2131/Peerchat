import express from "express"
import { logout, signin, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/signup",signup)

router.post("/signin", signin)

router.post("/logout", logout)

router.put("/update-profile", protectRoute, updateProfile)

export default router;