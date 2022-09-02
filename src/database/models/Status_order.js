module.exports = function(sequelize,dataTypes){
    let alias = "Status_order";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type: dataTypes.STRING
            
        }
        }
        
        let config = {
            tableName: "status_orders",
            timestamps: false
        }

        let Status_order = sequelize.define(alias, cols, config);

        Status_order.associate = function(models){
           Status_order.hasMany(models.Order, {
               as: "orders",
               foreignKey:"status_orders_id"
           })
        }
        return Status_order;
}