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
     await queryInterface.bulkInsert('users', [
     {
      name: "Jhon" ,
      lastname: "Doe",
      email: "jhon@prueba.com",
      password: "$2a$10$29/VauYvNJWt3KbTEM/RaelfgUi6WKsBK7tMdRrqJrbsL..B599c2",
      admin: 1,
      imgPath: "/images/avatars/default-avatar.png",
       billing_address: "Calle 40 # 44", 
       shipping_address: "Calle 40 # 44",  
       phone: "(57)3147012467"
     },
     {
      name: "Jane",
      lastname: "Doe",
      email: "jane@prueba.com",
      password: "$2a$10$ZhvzHBUcHv00IyqqvzHime9eX7zV890He0BgTtpQSZy7hNaedwYYS",
      admin: 0,
      imgPath: "/images/avatars/avatar-1655226934424.png",
      billing_address: "Calle 40 # 44", 
      shipping_address: "Calle 40 # 44",  
      phone: "(57)3147012467"
     },
     {
      name: "jime",
      lastname: "nemiña",
      email: "jimenanemina@gmail.com",
      password: "$2a$10$iMZJITtXV9k/NHaaE7mBjOnwG36HBCbaHQfBtej6E07FqV5KxaG0m",
      admin: 0,
      imgPath:"/images/avatars/default-avatar.png",
      billing_address: "Calle 40 # 44", 
      shipping_address: "Calle 40 # 44",  
      phone: "(57)3147012467"
     },
     {
      name: "sdfasdf",
      lastname: "sadfasdfsad",
      email: "sdfsadf@gmail.com",
      password: "$2a$10$GuoQhGSmTLXBxuLglL87/eyO2DV/K9MW0jUatWm0NOymTuf8vNV.S",
      admin: 0,
      imgPath: "/images/avatars/avatar-1655253658033.jpg",
      billing_address: "Calle 40 # 44", 
      shipping_address: "Calle 40 # 44",  
      phone: "(57)3147012467"
     },
     {
      name: "admin",
      lastname: "admin",
      email: "admin@prueba.com",
      password: "$2a$10$tNRHrG9L4WuH8kUBpYQfw.Tywv1/YxasHKvc2eA9zieui4jshuhQa",
      admin: 1,
      imgPath: "/images/avatars/default-avatar.png",
      billing_address: "Calle 40 # 44", 
      shipping_address: "Calle 40 # 44",  
      phone: "(57)3147012467"
     },
     {
      name: "no admin",
      lastname: "no admin",
      email: "noadmin@prueba.com",
      password: "$2a$10$JMogTTbnlciP6Nu3aaeHcuVcfcOePX/PPVu9oA7e5TgbiCNdnIL4C",
      admin: 0,
      imgPath: "/images/avatars/default-avatar.png",
      billing_address: "Calle 40 # 44", 
      shipping_address: "Calle 40 # 44",  
      phone: "(57)3147012467"
     },
     {
      name: "victor",
      lastname: "roca",
      email: "victor.roca@prueba.com",
      password: "$2a$10$7qd66JMpLElL9lI7cQfgyOGeMlm96hYaVYR5oInxAo9VbjDXqniY2",
      admin: 1,
      imgPath: "/images/avatars/default-avatar.png",
      billing_address: "Calle 40 # 44", 
      shipping_address: "Calle 40 # 44",  
      phone: "(57)3147012467"
     },
     {
      name: "Giovany Alexander",
      lastname: "L",
      email: "giolaver31@gmail.com",
      password: "$2a$10$qcOGLyFgAQKZh1y5Aq8CTuACSZupwL0cbkJa16utjx6ecKGGjD6y2",
      admin: 1,
      imgPath: "/images/avatars/default-avatar.png",
      billing_address: "Calle 40 # 44", 
      shipping_address: "Calle 40 # 44",  
      phone: "(57)3147012467"
     },
     {
      name: "pepito",
      lastname: "rrr",
      email: "analistadesarrollo1@agaval.com.co",
      password: "$2a$10$VqSiVcSKupY9eZYWkYViu.QkF1QgSLm6z3RBtEACJVOo0w5M94oEi",
      admin: 1,
      imgPath: "/images/avatars/default-avatar.png",
      billing_address: "Calle 40 # 44", 
      shipping_address: "Calle 40 # 44",  
      phone: "(57)3147012467"
    
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
     await queryInterface.bulkDelete('users', null, {});
  }
};
