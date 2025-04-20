import { Request, Response } from "express";
import { Restaurant } from "../models/List";

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Restaurant.findAll({
      order: [["createdAt", "DESC"]], 
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Restaurant" });
  }
};

export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const item = await Restaurant.findOne({
      where: { id },
    });
    
    if (!item) {
      res.status(404).json({ message: "Restaurant not found" });
      return
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Restaurant", error });
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {    
    const { name,address,contact} = req.body;
    const newItem = await Restaurant.create({ name, address,contact });
    res.status(201).json(newItem);
  } catch (error) {
    console.log(22,error)
    res.status(500).json({ message: "Error creating Restaurant" });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Restaurant.update(req.body, { where: { id } });
    const updatedItem = await Restaurant.findByPk(id);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating Restaurant" });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Restaurant.destroy({ where: { id } });
    res.json({ message: "Restaurant deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Restaurant" });
  }
};
