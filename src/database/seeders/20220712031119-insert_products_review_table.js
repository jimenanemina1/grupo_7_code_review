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
     await queryInterface.bulkInsert('products_review', [
      {
        products_id: 1,
        review_id: 1
      },
      {
        products_id: 2,
        review_id: 3
      },
      {
        products_id: 3,
        review_id: 4
      },
      {
        products_id: 4,
        review_id: 5
      }

   ],{});
 

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('products_review', null, {});
  }
};
