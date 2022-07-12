'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
   
     await queryInterface.createTable('order_details', { 
      id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
        primaryKey: true
     },
     orders_id: {
       type: Sequelize.INTEGER,
       allowNull: false ,
       references: {
        model: 'orders',
        key: 'id'
        }   
            
     },
     products_id: {
      type: Sequelize.INTEGER,
      allowNull: false,  
      references: {
        model: 'products',
        key: 'id'
        }       
    },
    price: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false       
     },
     quantity: {
      type: Sequelize.INTEGER,
      allowNull: false       
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
     await queryInterface.dropTable('order_details');
   
  }
};
