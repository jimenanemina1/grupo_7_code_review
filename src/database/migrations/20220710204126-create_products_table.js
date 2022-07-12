'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('products', { 
     id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false      
    },
    price: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false  
    },
    discount: {
      type: Sequelize.INTEGER,
      allowNull: true 
    },
    size: {
      type: Sequelize.INTEGER,
      allowNull: false 
    },    
    description: {
      type: Sequelize.TEXT,
      allowNull: true 
    },
    imgPath: {
      type: Sequelize.STRING(100),
      allowNull: true      
    },
    create_date: {
      type: Sequelize.DATE,
      allowNull: false 
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false 
    },
    categories_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
        }
        
      },
      offer: {
        type: Sequelize.BOOLEAN,
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
     await queryInterface.dropTable('products');
  }
};
