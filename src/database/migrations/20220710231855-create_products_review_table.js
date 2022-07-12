'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
   
     await queryInterface.createTable('products_review', { 
      id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
        primaryKey: true
     },
     products_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
        }       
     },
     review_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'review',
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
     await queryInterface.dropTable('products_review');
   
  }
};
