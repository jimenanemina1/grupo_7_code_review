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
        description:'Diseñada para la industria, esta balanza es específica para la precisión de carga superior. Es un producto durable, que se destaca por su firmeza y resistencia, ideal para pesar objetos de gran volumen. Display digital. Olvidate de pesos inexactos, la mayor ventaja de tener una balanza con pantalla digital es que te muestra de manera clara y precisa tu pesaje.',
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
        description: 'Sifon cremera marca cream whipper. De 0.5lts. Viene con accesorios. Se usan con tubo de co2. Ideal pastelería o cafeterías.',
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
        description: 'Capacidad: 250ml. Material: vidrio y acero inoxidable',
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
        description: 'Para preparar deliciosa leche espumada y chocolate caliente. Capacidad para espumado: 100 ml. Capacidad para emulsionado: 200 ml. Incluye accesorios espumador y mezclador desmontables. Tapa transparente y jarra en acero inoxidable. Recipiente para leche antiadherente, fácil de limpiar. Luz indicadora de función y encendido en dos colores. Sistema de apagado automático de seguridad',
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
        description: 'Todo lo necesario para armar un buen cafe. Contiene espumador de leche, dosificador azucar y tamper ',  
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
        description: 'Diseñado de calidad, pensado para la practicidady comodidad del Barista. Mango ergonómico y liso para un agarre cómodo y resistente. Base de acero inoxidable sólido de alta calidad, ultrasuave, mecanizada con precisión. La superficie de apisonamiento plana produce terrenos apisonados uniformemente para un mejor sabor. Diámetro de 58 mm.',  
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
        description: 'Pocillo de vidrio templado resistente. Este diseño es ideal para una cafetera express. Muestra el compromiso con el sabor del café.',  
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
        description: 'Termometro para Infusiones.',
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
        description: 'CONTRUIDA EN VIDRIO TERMICO CON PAREDES DOBLES: MANTIENE LA TEMPERATURA EXACTA DE CUALQUIER BEBIDA, LA CAPA EXTERIOR AISLA LA TAZA DE CAFE. SE PUEDE SACAR DEL MICROONDAS CON LAS MANOS DESNUDAS Y MANTENERLO DURANTE MUCHO TIEMPO, YA QUE NO QUEMARA LAS MANOS NI SUDARA.',  
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
        description: 'Presentación 1 Kg CAFE ESPRESSO MONTIBELLO BRASIL. Está elaborado con granos de café 100% arábica SANTOS BOURBON, los más selectos de Brasil. tiene características suaves, pero de sabor exquisito, fina calidad y aspecto cremoso, para ser disfrutado en todo momento.CAFE TOSTADO EN GRANO, TOSTADO MEDIO, INTENSIDAD MEDIA',  
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
