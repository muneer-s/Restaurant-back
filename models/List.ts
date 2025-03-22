import {DataTypes,Model} from 'sequelize'
import sequelize from './index'

export interface restaurantAttributes{
    id:number,
    name :string,
    address:string,
    contact:number,
    // createdAt:Date ,
    // updatedAt:Date 
}

export class Restaurant extends Model<restaurantAttributes> implements restaurantAttributes{
    public id!:number;
    public name!:string;
    public address!:string;
    public contact!:number;
    // public readonly createdAt!:Date ;
    // public readonly updatedAt!:Date ;
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
        type:DataTypes.NUMBER,
        allowNull:false
    },
    // createdAt:{
    //     type:DataTypes.DATE,
    //     allowNull:false
    // },
    // updatedAt:{
    //     type:DataTypes.DATE,
    //     allowNull:false
    // }
},{
    timestamps:true,
    sequelize:sequelize,
    paranoid:true  // soft delete cheyyan 
})