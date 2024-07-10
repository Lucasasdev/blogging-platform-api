import express from "express";
import * as customerControlerPrisma from "../controllers/userController";

const router = express.Router();

router.get("/:id", customerControlerPrisma.getCustomer);
router.get("/", customerControlerPrisma.getCustomers);
router.post("/", customerControlerPrisma.createCustomer);
router.patch("/:id", customerControlerPrisma.patchCustomer);
router.delete("/:id", customerControlerPrisma.deleteCustomer);

export default router;
