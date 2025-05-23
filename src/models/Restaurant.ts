import {DataTypes,Model } from 'sequelize'
import sequelize from './index'

export interface restaurantAttributes{
    id?:number,
    name :string,
    address:string,
    contact:number,
}

export class Restaurant extends Model<restaurantAttributes> implements restaurantAttributes{
    public id!:number;
    public name!:string;
    public address!:string;
    public contact!:number;
}

Restaurant.init({
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contact:{
        type:DataTypes.BIGINT,
        allowNull:false
    },
},{
    timestamps:true,
    sequelize:sequelize,
    paranoid:true  // used for soft delete 
})

