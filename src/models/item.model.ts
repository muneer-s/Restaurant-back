import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Item extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "items",
  }
);

export default Item;
