import express from "express";
import { getItems, updateItem, deleteItem, createItem, getItem } from "../controllers/controller";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;