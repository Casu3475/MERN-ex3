import express from "express";
import { registerUser } from "../controllers/AuthController.js"; // ROUTES --> CONTROLLERS
import {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  follow,
  unfollow,
} from "../controllers/UserController.js"; // ROUTES --> CONTROLLERS

const router = express.Router();

// auth
router.post("/register", registerUser);
// router.post("/login", loginUser);

// user db
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/follow/:id", follow);
router.patch("/unfollow/:id", unfollow);

export default router;
