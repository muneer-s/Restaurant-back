import { restaurantAttributes } from "../models/Restaurant";

export interface IRestaurantRepository {
  findAll(): Promise<restaurantAttributes[]>;
  findById(id: string): Promise<restaurantAttributes | null>;
  create(data: restaurantAttributes): Promise<restaurantAttributes>;
  update(id: string, data: Partial<restaurantAttributes>): Promise<restaurantAttributes | null>;
  delete(id: string): Promise<void>;
}
