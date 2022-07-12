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
     await queryInterface.bulkInsert('review', [
      {
        date: new Date(),
        points: 3,
        Comment: "Me encanto el producto tal y como lo describen en la publicación",
        users_id:8

      },
      {
        date: new Date(),
        points: 5,
        Comment: "Me encanto el producto tal y como lo describen en la publicación,buen precio",
        users_id:8
      },
      {
        date: new Date(),
        points: 2,
        Comment: "No me gusto el producto, muy mala calidad",
        users_id:7
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
     await queryInterface.bulkDelete('review', null, {});
  }
};
