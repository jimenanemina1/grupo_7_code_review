'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
   
     await queryInterface.createTable('review', { 
      id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
        primaryKey: true
     },
     date: {
      type: Sequelize.DATE,
      allowNull: false       
     },
     points: {
      type: Sequelize.INTEGER,
      allowNull: true,  
      
    },
    comment: {
      type: Sequelize.TEXT,
      allowNull: false       
     },
     users_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
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
     await queryInterface.dropTable('review');
   
  }
};
