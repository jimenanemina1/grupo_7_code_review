module.exports = function(sequelize,dataTypes){
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type: dataTypes.STRING
            
        },
        price: {
            type: dataTypes.DECIMAL
        },
        discount: {
            type: dataTypes.INTEGER
        },
        size: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.TEXT
        },
        imgPath: {
            type: dataTypes.STRING
        },
        create_date: {
            type: dataTypes.DATE
        },
        stock: {
            type: dataTypes.INTEGER
        },
        categories_id: {
            type: dataTypes.INTEGER
        },
        offer: {
            type: dataTypes.TINYINT
        }
        }
        
        let config = {
            tableName: "products",
            timestamps: false
        }

        let Product = sequelize.define(alias, cols, config);

        
        Product.associate = function(models){
            Product.hasMany(models.Order_detail,{
                as: "orders_details",
                foreignKey: "products_id"
            });
            Product.belongsTo(models.Category,{
                as: "category",
                foreignKey: "categories_id"
            });
            Product.belongsToMany(models.Review,{
                as: "reviews",
                through: "products_review",
                foreignKey: "products_id"
            });
            Product.belongsToMany(models.Order,{
                as: "orders",
                through: "order_details",
                foreignKey: "orders_id",
                otherKey: "products_id",
                timestamps:false
            })
        }
        return Product;
}