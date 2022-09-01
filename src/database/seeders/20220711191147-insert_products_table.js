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
     await queryInterface.bulkInsert('products', [
       {
        name: 'Báscula Electrónica',
        price: 1.10,
        discount: 10,
        size: 1000,	
        description:'Nonummy labore magna gubergren nobis. Lorem lorem lorem sit qui iusto takimata wisi rebum ipsum magna justo. Ipsum ipsum ipsum kasd dolores duis ea est sit labore kasd no clita option. Stet elitr sanctus dolor dolore invidunt aliquyam clita duo dolor dolore justo iusto ea dolore sed ea. Sea suscipit kasd nonummy takimata ea eos gubergren et eirmod voluptua sadipscing in dolores vero amet. Accusam wisi sit no eos eos tempor invidunt augue consequat vero nonummy diam eirmod.',
        imgPath: '/images/bascula.png',
        create_date: new Date(),
        stock: 1,
        categories_id: 1,
        offer: 0
       },
       {
        name: 'Dispensador de crema',
        price: 2.20,
        discount: 10,
        size: 1000,
        description: 'Praesent clita sed blandit stet nibh erat invidunt laoreet et nonumy justo nibh facilisis sit sanctus minim duo. Invidunt eos in gubergren. Clita accusam dolor duo nonumy. Augue stet est clita erat ea eum clita exerci dolore erat magna et consetetur nihil facilisis. Et et et vel sanctus sed et eum elitr. Dolore et et vel elit stet facilisis stet doming ea eu dolores magna stet tempor. Facilisis sea elitr duo illum diam duo consetetur dolore sit vel velit.',
        imgPath: '/images/dispensador-de-crema.png',
        create_date: new Date(),
        stock: 1,
        categories_id: 1,
        offer: 0,
       },
       {
        name: 'Dosificador de azúcar',
        price: 3.30,
        discount: 10,  
        size: 1000,
        description: 'Elitr adipiscing aliquip. Accusam magna at feugiat. Sed labore eros et. Vero eu eirmod te tempor minim dolore. Ut invidunt vero sanctus duo. Lorem molestie vero sit et nonumy amet rebum aliquyam. Nulla et ut clita. Erat feugiat elitr eu. Eos amet dolor ipsum amet vero erat. Lorem sed vero et stet accumsan sed ut lorem stet sed labore sit kasd. At sit rebum sed vel. Commodo ut et dolor. Feugait in esse et ut velit sadipscing adipiscing no amet dolor clita doming amet sed eum. ',
        imgPath: '/images/dosificador-de-azucar.png',
        create_date: new Date(),
        stock: 1,
        categories_id: 1,
        offer: 1,
       },
       {
        name: 'Espumador de Leche',
        price: 4.40,
        discount: 10, 
        size: 1000,	
        description: 'Sit delenit labore sit ut sit sit lorem at sea imperdiet duo vero dolores rebum tation ea sadipscing. Enim dolore justo ea clita odio consetetur hendrerit volutpat no hendrerit sed sed erat ipsum in. Rebum ut nonumy kasd sit rebum vero et sed stet ut lobortis hendrerit amet diam aliquyam eirmod erat rebum. Rebum et veniam sed accumsan ea amet eu lorem blandit. Doming mazim elitr sadipscing sed tempor et amet justo amet lorem. Sadipscing no dolore vulputate.',
        imgPath: '/images/espumador-de-leche.png',
        create_date: new Date(),
        stock: 1,
        categories_id: 1,
        offer: 1,
       },
       {
        name: 'Maletín de Barista',
        price: 5, 
        discount: 0,
        size: '1000',	
        description: 'Ea dolor esse dolores vero eirmod stet facilisis lorem. Et dolore amet sea dolor sed invidunt tempor mazim labore gubergren magna sed option vero kasd voluptua. Sit at dolores erat dolores elitr et eos rebum accumsan et velit et sadipscing. Gubergren stet sit sed ea dolores ut ut sit minim rebum vero no takimata nonumy voluptua stet stet. Tincidunt hendrerit clita ipsum ea lorem in erat diam dolor. Dolor dolor et eu et consectetuer sed illum gubergren sed no nulla odio. ',  
        imgPath: '/images/maletin_barista.png',
        create_date: new Date(),
        stock: 1,
        categories_id: 1,
        offer: 0,
       },
       {
        name: 'Tamper',
        price: 6.60, 
        discount: 0,
        size: '1000',	
        description: 'Ea dolor esse dolores vero eirmod stet facilisis lorem. Et dolore amet sea dolor sed invidunt tempor mazim labore gubergren magna sed option vero kasd voluptua. Sit at dolores erat dolores elitr et eos rebum accumsan et velit et sadipscing. Gubergren stet sit sed ea dolores ut ut sit minim rebum vero no takimata nonumy voluptua stet stet. Tincidunt hendrerit clita ipsum ea lorem in erat diam dolor. Dolor dolor et eu et consectetuer sed illum gubergren sed no nulla odio. ',  
        imgPath: '/images/tamper.png',
        create_date: new Date(),
        stock: 1,
        categories_id: 1,
        offer: 0,
       },
       {
        name: 'Tazas para espresso',
        price: 7.70, 
        discount: 0,
        size: '1000',	
        description: 'Ea dolor esse dolores vero eirmod stet facilisis lorem. Et dolore amet sea dolor sed invidunt tempor mazim labore gubergren magna sed option vero kasd voluptua. Sit at dolores erat dolores elitr et eos rebum accumsan et velit et sadipscing. Gubergren stet sit sed ea dolores ut ut sit minim rebum vero no takimata nonumy voluptua stet stet. Tincidunt hendrerit clita ipsum ea lorem in erat diam dolor. Dolor dolor et eu et consectetuer sed illum gubergren sed no nulla odio. ',  
        imgPath: '/images/tazas-espresso.png',
        create_date: new Date(),
        stock: 1,
        categories_id: 1,
        offer: 0,
       },
       {
        name: 'Termómetro',
        price: 8.8, 
        discount: 10,
        size: '1000',	
        description: 'Ea dolor esse dolores vero eirmod stet facilisis lorem. Et dolore amet sea dolor sed invidunt tempor mazim labore gubergren magna sed option vero kasd voluptua. Sit at dolores erat dolores elitr et eos rebum accumsan et velit et sadipscing. Gubergren stet sit sed ea dolores ut ut sit minim rebum vero no takimata nonumy voluptua stet stet. Tincidunt hendrerit clita ipsum ea lorem in erat diam dolor. Dolor dolor et eu et consectetuer sed illum gubergren sed no nulla odio. ',  
        imgPath: '/images/termometro.png',
        create_date: new Date(),
        stock: 1,
        categories_id: 1,
        offer: 1,
       },
       {
        name: 'Vasos para latte',
        price: 10, 
        discount: 0,
        size: '2000',	
        description: 'Ea dolor esse dolores vero eirmod stet facilisis lorem. Et dolore amet sea dolor sed invidunt tempor mazim labore gubergren magna sed option vero kasd voluptua. Sit at dolores erat dolores elitr et eos rebum accumsan et velit et sadipscing. Gubergren stet sit sed ea dolores ut ut sit minim rebum vero no takimata nonumy voluptua stet stet. Tincidunt hendrerit clita ipsum ea lorem in erat diam dolor. Dolor dolor et eu et consectetuer sed illum gubergren sed no nulla odio. ',  
        imgPath: '/images/vasos-latte.png',
        create_date: new Date(),
        stock: 1,
        categories_id: 1,
        offer: 1,
       },
       {
        name: 'Cafe Expresso Suave',
        price: 10.10, 
        discount: 2,
        size: '500',	
        description: 'Ea dolor esse dolores vero eirmod stet facilisis lorem. Et dolore amet sea dolor sed invidunt tempor mazim labore gubergren magna sed option vero kasd voluptua. Sit at dolores erat dolores elitr et eos rebum accumsan et velit et sadipscing. Gubergren stet sit sed ea dolores ut ut sit minim rebum vero no takimata nonumy voluptua stet stet. Tincidunt hendrerit clita ipsum ea lorem in erat diam dolor. Dolor dolor et eu et consectetuer sed illum gubergren sed no nulla odio. ',  
        imgPath: '/images/cafeFuerte.png',
        create_date: new Date(),
        stock: 1,
        categories_id: 2,
        offer: 0,
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
     await queryInterface.bulkDelete('products', null, {});
  }
};
