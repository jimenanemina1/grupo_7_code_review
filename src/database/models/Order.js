module.exports = function(sequelize,dataTypes){
    let alias = "Order";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        users_id:{
            type: dataTypes.STRING,
            foreignKey: true
            
        },
        ammount: {
            type: dataTypes.DECIMAL
        },
        billing_address: {
            type: dataTypes.STRING
        },
        shipping_address: {
            type: dataTypes.STRING
        },
        order_email: {
            type: dataTypes.STRING
        },
        order_date: {
            type: dataTypes.DATE
        },
        status_orders_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        }
        }
        
        let config = {
            tableName: "orders",
            timestamps: false
        }

        let Order = sequelize.define(alias, cols, config);

        Order.associate = function(models){
           Order.belongsTo(models.Status_order,{
               as: "status_order",
               foreignKey:"status_orders_id",

           });
           Order.belongsTo(models.User,{
               as: "user",
               foreignKey: "users_id"
           });
           Order.belongsToMany(models.Product,{
            as: "productos",
            through: "order_details",
            foreignKey: "products_id",
            otherKey: "orders_id",
            timestamps:false
        })

        }
        return Order;
}