'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('users', { 
      id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true
     },
     name: {
       type: Sequelize.STRING(100),
       allowNull: false         
     },
     lastname: {
       type: Sequelize.STRING(100),
       allowNull: false  
     },
     email: {
       type: Sequelize.STRING(255),
       allowNull: false 
     },    
     password: {
       type: Sequelize.STRING(255),
       allowNull: false
     },
     admin: {
       type: Sequelize.BOOLEAN,
       allowNull: false     
     },
     imgPath: {
       type: Sequelize.STRING(100),
       allowNull: true 
     },
     billing_address: {
       type: Sequelize.STRING(255),
       allowNull: false 
     },
     shipping_address: {
       type: Sequelize.STRING(255),
             
      },
      phone: {
        type: Sequelize.STRING(50),
              
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
     await queryInterface.dropTable('users');
  }
};
