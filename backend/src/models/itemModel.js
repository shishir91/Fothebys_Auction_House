import connection from "./index.js";
import { DataTypes } from "sequelize";

const userModel = connection.define(
    "items",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        category:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        productDetail:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        mediumUsed:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        materialUsed:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        dimension:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        lotNumber:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        auctionDate:{
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        auctionTime:{
            type: DataTypes.TIME,
            allowNull: false,
        },
        auctionDuration:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        basePrice:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        currentPrice:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        soldPrice:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        soldTo:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        uploadedBy:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

export default userModel;
