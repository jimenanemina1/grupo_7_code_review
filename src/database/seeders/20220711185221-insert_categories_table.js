'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('categories', [
      {
      name: "Accesorios"
      },
      {
      name: "Cafe"
      },
      {
        name: "Coladores"
      },
      {
      name: "Capsulas"
      },
      {
      name: "Regalos"
      },
      {
      name: "Cafetera Industrial"
      },
      {
      name: "Cafe de Exportación"
      },
   ],{});
 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('categories', null, {});

  }
};
