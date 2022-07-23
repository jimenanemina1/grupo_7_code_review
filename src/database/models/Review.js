const { singularize } = require("sequelize/types/utils");

module.exports = function(sequelize,dataTypes){
    let alias = "Review";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        date:{
            type: dataTypes.DATE
            
        },
        points: {
            type: dataTypes.INTEGER
        },
        comment: {
            type: dataTypes.TEXT
        },
        users_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        }
        }
        
        let config = {
            tableName: "review",
            timestamps: false
        }

        let Review = sequelize.define(alias, cols, config);

        Review.associate = function(models){
            Review.belognsTo(models.User,{
                as: "user",
                foreignKey: "users_id"
            });
            Review.belongsToMany(models.Product,{
                as: "products",
                through: "products_review",
                foreignKey: "review_id"
            })
        }
        return Review;
}