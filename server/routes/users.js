import express from "express";

import { signin, singup } from "../controllers/users.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", singup);

export default router;
