import express from "express";
import * as customerControlerPrisma from "../controlers/CustomerControllerPrisma";

const router = express.Router();

router.get("/:id", customerControlerPrisma.getCustomer);
router.get("/", customerControlerPrisma.getCustomers);
router.get("/", customerControlerPrisma.createCustomer);

export default router;
