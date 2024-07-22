import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.get("/:id", userController.getCustomer);
router.get("/", userController.getCustomers);
router.post("/", userController.createCustomer);
router.patch("/:id", userController.patchCustomer);
router.delete("/:id", userController.deleteCustomer);

export default router;
