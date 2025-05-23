import { Request, Response } from "express";
import { IRestaurantService } from "../interfaces/IRestaurantService";

export class RestaurantController {
  constructor(private restServices: IRestaurantService) { }

  async getItems(req: Request, res: Response): Promise<Response | void> {
    try {
      const items = await this.restServices.getAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Error fetching Restaurant" });
    }
  };


  async getItem(req: Request, res: Response): Promise<Response | void> {
    try {
      const item = await this.restServices.getById(req.params.id);

      if (!item) return res.status(404).json({ message: "Not found" });

      res.json(item);
    } catch (error) {
      res.status(500).json({ message: "Error fetching Restaurant" });
    }
  };

  async createItem(req: Request, res: Response): Promise<Response | void>{
    try {
      const { name, address, contact } = req.body;
      const newItem = await this.restServices.create({ name, address, contact });
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ message: "Error creating Restaurant" });
    }
  };

  async updateItem(req: Request, res: Response): Promise<Response | void>{
    try {
      const updated = await this.restServices.update(req.params.id, req.body);
      res.json(updated);
    } catch (error) {
      res.status(500).json({ message: "Error updating Restaurant" });
    }
  };

  async deleteItem(req: Request, res: Response): Promise<Response | void>{
    try {
      await this.restServices.delete(req.params.id);
      res.json({ message: "Deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting Restaurant" });
    }
  };



}






// import { Request, Response } from "express";
// import { Restaurant } from "../models/Restaurant";

// export const getItems = async (req: Request, res: Response) => {
//   try {
//     const items = await Restaurant.findAll({
//       order: [["createdAt", "DESC"]], 
//     });
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching Restaurant" });
//   }
// };

// export const getItem = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

//     const item = await Restaurant.findOne({
//       where: { id },
//     });

//     if (!item) {
//       res.status(404).json({ message: "Restaurant not found" });
//       return
//     }

//     res.json(item);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching Restaurant", error });
//   }
// };

// export const createItem = async (req: Request, res: Response) => {
//   try {    
//     const { name,address,contact} = req.body;
//     const newItem = await Restaurant.create({ name, address,contact });
//     res.status(201).json(newItem);
//   } catch (error) {
//     console.log(22,error)
//     res.status(500).json({ message: "Error creating Restaurant" });
//   }
// };

// export const updateItem = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     await Restaurant.update(req.body, { where: { id } });
//     const updatedItem = await Restaurant.findByPk(id);
//     res.json(updatedItem);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating Restaurant" });
//   }
// };

// export const deleteItem = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     await Restaurant.destroy({ where: { id } });
//     res.json({ message: "Restaurant deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting Restaurant" });
//   }
// };