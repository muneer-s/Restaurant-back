import { IRestaurantRepository } from "../interfaces/IRestaurantRepository";
import { IRestaurantService } from "../interfaces/IRestaurantService";
import { restaurantAttributes } from "../models/Restaurant";

export class RestaurantService implements IRestaurantService {
    constructor(private repo: IRestaurantRepository) { }

    async getAll(): Promise<restaurantAttributes[]> {
        try {
            return await this.repo.findAll();
        } catch (error) {
            console.log("Error in service layer", error)
            throw error
        }
    }

    async getById(id: string): Promise<restaurantAttributes | null> {
        try {
            return await this.repo.findById(id);
        } catch (error) {
            console.log("Error in service layer", error)
            throw error
        }
    }

    async create(data: restaurantAttributes): Promise<restaurantAttributes> {
        try {
            return await this.repo.create(data);
        } catch (error) {
            console.log("Error in service layer", error)
            throw error
        }
    }

    async update(id: string, data: Partial<restaurantAttributes>): Promise<restaurantAttributes | null> {
        try {
            return await this.repo.update(id, data);
        } catch (error) {
            console.log("Error in service layer", error)
            throw error
        }
    }

    async delete(id: string): Promise<void> {
        try {
            return await this.repo.delete(id);
        } catch (error) {
            console.log("Error in service layer", error)
            throw error
        }
    }
}
