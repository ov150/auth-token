import express from "express"
import { createUserController, userLoginController ,getUserController, userLogoutController } from "../controllers/user-controller.js";
import verify from "../middlewares/verify.js";

const router = express.Router();

//http://localhost:4000/api/v1/user/new
router.post('/new', createUserController)
//http://localhost:4000/api/v1/user/login
router.post('/login', userLoginController)
//http://localhost:4000/api/v1/user/me
router.get('/me', verify , getUserController)
//http://localhost:4000/api/v1/user/logout
router.post('/logout',verify, userLogoutController);

export default router;