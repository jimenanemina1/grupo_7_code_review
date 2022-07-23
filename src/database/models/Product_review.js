const { singularize } = require("sequelize/types/utils");

module.exports = function(sequelize,dataTypes){
    let alias = "Product_review";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        products_id:{
            type: dataTypes.INTEGER,
            foreignKey: true
            
        },
        review_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        }
        }
        
        let config = {
            tableName: "products_review",
            timestamps: false
        }

        let Product_review = sequelize.define(alias, cols, config);

    
        return Product_review;
}