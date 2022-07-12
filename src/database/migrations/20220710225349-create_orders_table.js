'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
   
     await queryInterface.createTable('orders', { 
      id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
        primaryKey: true
     },
     users_id: {
       type: Sequelize.INTEGER,
       allowNull: false ,
       references: {
        model: 'users',
        key: 'id'
        }   
            
     },
     ammount: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false      
    },
    billing_address: {
      type: Sequelize.STRING(255),
      allowNull: false 
    },
    shipping_address: {
      type: Sequelize.STRING(255),
      allowNull: false       
     },
     order_email: {
      type: Sequelize.STRING(255),
      allowNull: false       
     },
     order_date: {
      type: Sequelize.DATE,
      allowNull: false       
     },
      status_orders_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'status_orders',
        key: 'id'
        }       
     }


    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('orders');
   
  }
};
