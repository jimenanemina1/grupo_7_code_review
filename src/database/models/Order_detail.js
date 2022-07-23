const { singularize } = require("sequelize/types/utils");

module.exports = function(sequelize,dataTypes){
    let alias = "Order_detail";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        order_id:{
            type: dataTypes.INTEGER,
            foreignKey: true
        },
        products_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        },
        price: {
            type: dataTypes.DECIMAL
        },
        quantity: {
            type: dataTypes.INTEGER
        }
        }
        
        let config = {
            tableName: "order_details",
            timestamps: false
        }

        let Order_detail = sequelize.define(alias, cols, config);

    
        return Order_detail;
}