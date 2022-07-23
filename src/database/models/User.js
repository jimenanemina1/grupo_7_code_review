module.exports = function(sequelize,dataTypes){
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type: dataTypes.STRING
            
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        admin: {
            type: dataTypes.TINYINT
        },
        imgPath: {
            type: dataTypes.STRING
        },
        billiing_address: {
            type: dataTypes.STRING
        },
        shopping_address: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.STRING
        }
        }
        
        let config = {
            tableName: "users",
            timestamps: false
        }

        let User = sequelize.define(alias, cols, config);
        User.associate = function(models){
            User.hasMany(models.Order, {
                as: "orders",
                foreignKey:"status_oders_id"
            });
            User.hasMany(models.Review,{
                as: "reviews",
                foreignKey: "users_id"
            })
         }
        return User;
}