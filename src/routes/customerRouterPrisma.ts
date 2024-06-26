import express from "express";
import * as customerControlerPrisma from "../controlers/customerControllerPrisma";

const router = express.Router();

router.get("/:id(\\d+)", customerControlerPrisma.getCustomer);
router.get("/", customerControlerPrisma.getCustomers);
router.post("/", customerControlerPrisma.createCustomer);
router.patch("/:id", customerControlerPrisma.patchCustomer);
router.delete("/:id", customerControlerPrisma.deleteCustomer);

export default router;
