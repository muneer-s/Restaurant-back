import { IRestaurantRepository } from "../interfaces/IRestaurantRepository";
import { restaurantAttributes, Restaurant } from "../models/Restaurant";
import { BaseRepository } from "./baseRepository";

export class RestaurantRepository implements IRestaurantRepository {
    private baseRepo: BaseRepository<Restaurant>;

    constructor() {
        this.baseRepo = new BaseRepository(Restaurant);
    }

    async findAll(): Promise<Restaurant[]> {
        try {
            return await this.baseRepo.findAll();
        } catch (error) {
            console.log('Error in repository layer', error)
            throw error
        }
    }

    async findById(id: string): Promise<Restaurant | null> {
        try {
            return await this.baseRepo.findById(id);
        } catch (error) {
            console.log('Error in repository layer', error)
            throw error
        }
    }

    async create(data: restaurantAttributes): Promise<Restaurant> {
        try {
            return await this.baseRepo.create(data);
        } catch (error) {
            console.log('Error in repository layer', error)
            throw error
        }
    }

    async update(id: string, data: Partial<restaurantAttributes>): Promise<Restaurant | null> {
        try {
            return await this.baseRepo.update(id, data);
        } catch (error) {
            console.log('Error in repository layer', error)
            throw error
        }
    }

    async delete(id: string): Promise<void> {
        try {
            return await this.baseRepo.delete(id);
        } catch (error) {
            console.log('Error in repository layer', error)
            throw error
        }
    }
}
