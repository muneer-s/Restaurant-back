import express from "express";
import { RestaurantController } from "../controllers/restaurant.controller";

const router = express.Router();

import { RestaurantRepository } from "../repositories/restaurantRepository";
import { RestaurantService } from "../services/restaurant.service";


const repo = new RestaurantRepository();
const service = new RestaurantService(repo);
const controller = new RestaurantController(service)

router.get("/", (req,res)=>{controller.getItems(req,res)});
router.get("/:id", (req,res)=>{controller.getItem(req,res)});
router.post("/", (req,res)=>{controller.createItem(req,res)});
router.put("/:id", (req,res)=>{controller.updateItem(req,res)});
router.delete("/:id", (req,res)=>{controller.deleteItem(req,res)});

export default router;