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
     await queryInterface.bulkInsert('orders', [
        {
         users_id: 1,
         ammount: 2000,
         billing_address: 'Callao , 3984',
         shipping_address: 'Fraga , 3984',	
         order_email:'correonuevo@gmail.com',
         order_date: new Date(),
         status_orders_id: 1
        },
        {
         users_id: 2,
         ammount: 4000,
         billing_address: 'Cerro de pasco, 3984',
         shipping_address: 'Pauner , 3984',	
         order_email:'otronuevo@gmail.com',
         order_date: new Date(),
         status_orders_id: 2
        },
        {
         users_id: 3,
         ammount: 500,
         billing_address: 'España , 3984',
         shipping_address: 'Malaver, 3984',	
         order_email:'pensaunonuevo@gmail.com',
         order_date: new Date(),
         status_orders_id: 3
        },
        {
        users_id: 4,
        ammount: 800,
        billing_address: 'Olaguer y feliu , 3984',
        shipping_address: 'Villate , 3984',	
        order_email:'cambialounonuevo@gmail.com',
        order_date: new Date(),
        status_orders_id: 4
        },
        {
        users_id: 5,
        ammount: 9000,
        billing_address: 'Ayacucho , 3984',
        shipping_address: 'Malaver , 3984',	
        order_email:'diferenteunonuevo@gmail.com',
        order_date: new Date(),
        status_orders_id: 5
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
     await queryInterface.bulkDelete('orders', null, {});

  }
};
