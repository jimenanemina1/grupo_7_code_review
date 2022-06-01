const Logger = require("nodemon/lib/utils/log");

const products = [
  {
    id: 1,
    name: "Báscula Electrónica",
    description:
      "Nonummy labore magna gubergren nobis. Lorem lorem lorem sit qui iusto takimata wisi rebum ipsum magna justo. Ipsum ipsum ipsum kasd dolores duis ea est sit labore kasd no clita option. Stet elitr sanctus dolor dolore invidunt aliquyam clita duo dolor dolore justo iusto ea dolore sed ea. Sea suscipit kasd nonummy takimata ea eos gubergren et eirmod voluptua sadipscing in dolores vero amet. Accusam wisi sit no eos eos tempor invidunt augue consequat vero nonummy diam eirmod.",
    price: 1.1,
    imgPath: "/images/bascula.png",
    size: 1000,
    category: "Accesorios",
    discount: 10,
    review:[
      {
      id:1,
      name:"Felipe Gomez",
      point:3,imgPath:"/images/avatar1.png",
      comment:"Anim nisi cillum magna cupidatat pariatur commodo ut ullamco reprehenderit. Et quis tempor ullamco aute est consectetur. Pariatur Lorem nisi duis id tempor eu esse consequat id. Dolore ex ipsum laborum mollit nostrud ex minim dolore Lorem do et esse sint cillum. Ullamco nisi sit do Lorem veniam mollit magna ea sit. Labore elit mollit ex sint labore eiusmod laborum enim esse eu officia ullamco veniam qui. Mollit officia magna occaecat consectetur sint tempor et amet cupidatat."
      },
      {
      id:2,
      name:"Carlos Restrepo",
      point:5,
      imgPath:"/images/avatar2.png",
      comment:"Duis in cupidatat quis occaecat adipisicing ipsum commodo anim. Qui anim aliquip ut amet dolore nulla culpa exercitation reprehenderit aliquip dolor irure. Sit velit tempor proident velit irure ex eu sint ea sit est cupidatat incididunt. Nulla ad sint laboris ea adipisicing velit in voluptate cupidatat. Reprehenderit velit voluptate commodo irure. Eu ex aliquip ex dolor ullamco ad nulla magna fugiat quis. Culpa occaecat mollit esse ipsum velit excepteur nostrud consectetur proident occaecat."
      },
      {
      id:3,
      name:"Federico gutierrez",
      point:2,
      imgPath:"/images/avatar3.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 2,
    name: "Dispensador de crema",
    description:
      "Praesent clita sed blandit stet nibh erat invidunt laoreet et nonumy justo nibh facilisis sit sanctus minim duo. Invidunt eos in gubergren. Clita accusam dolor duo nonumy. Augue stet est clita erat ea eum clita exerci dolore erat magna et consetetur nihil facilisis. Et et et vel sanctus sed et eum elitr. Dolore et et vel elit stet facilisis stet doming ea eu dolores magna stet tempor. Facilisis sea elitr duo illum diam duo consetetur dolore sit vel velit.",
    price: 2.2,
    imgPath: "/images/dispensador-de-crema.png",
    size: 1000,
    category: "Accesorios",
    discount: 10,
    review:[
      {
      id:7,
      name:"Sandra Ramirez",
      point:1,
      imgPath:"/images/avatar7.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:5,
      name:"Catalina Serna",
      point:2,
      imgPath:"/images/avatar5.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 3,
    name: "Dosificador de azúcar",
    description:
      "Elitr adipiscing aliquip. Accusam magna at feugiat. Sed labore eros et. Vero eu eirmod te tempor minim dolore. Ut invidunt vero sanctus duo. Lorem molestie vero sit et nonumy amet rebum aliquyam. Nulla et ut clita. Erat feugiat elitr eu. Eos amet dolor ipsum amet vero erat. Lorem sed vero et stet accumsan sed ut lorem stet sed labore sit kasd. At sit rebum sed vel. Commodo ut et dolor. Feugait in esse et ut velit sadipscing adipiscing no amet dolor clita doming amet sed eum. ",
    price: 3.3,
    imgPath: "/images/dosificador-de-azucar.png",
    size: 1000,
    category: "Accesorios",
    discount: 10,
    review:[
      {
      id:4,
      name:"Jorge Echavarria",
      point:1,
      imgPath:"/images/avatar4.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:8,
      name:"Mauricio Patiño",
      point:3,
      imgPath:"/images/avatar8.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 4,
    name: "Espumador de Leche",
    description:
      "Sit delenit labore sit ut sit sit lorem at sea imperdiet duo vero dolores rebum tation ea sadipscing. Enim dolore justo ea clita odio consetetur hendrerit volutpat no hendrerit sed sed erat ipsum in. Rebum ut nonumy kasd sit rebum vero et sed stet ut lobortis hendrerit amet diam aliquyam eirmod erat rebum. Rebum et veniam sed accumsan ea amet eu lorem blandit. Doming mazim elitr sadipscing sed tempor et amet justo amet lorem. Sadipscing no dolore vulputate.",
    price: 4.4,
    imgPath: "/images/espumador-de-leche.png",
    size: 1000,
    category: "Accesorios",
    discount: 10,
    review:[
      {
      id:4,
      name:"Jorge Echavarria",
      point:3,
      imgPath:"/images/avatar4.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:8,
      name:"Mauricio Patiño",
      point:3,
      imgPath:"/images/avatar8.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 5,
    name: "Maletín de Barista",
    description:
      "Ea dolor esse dolores vero eirmod stet facilisis lorem. Et dolore amet sea dolor sed invidunt tempor mazim labore gubergren magna sed option vero kasd voluptua. Sit at dolores erat dolores elitr et eos rebum accumsan et velit et sadipscing. Gubergren stet sit sed ea dolores ut ut sit minim rebum vero no takimata nonumy voluptua stet stet. Tincidunt hendrerit clita ipsum ea lorem in erat diam dolor. Dolor dolor et eu et consectetuer sed illum gubergren sed no nulla odio. ",
    price: 5.5,
    imgPath: "/images/maletin_barista.png",
    size: 1000,
    category: "Accesorios",
    discount: 10,
    review:[
      {
      id:4,
      name:"Jorge Echavarria",
      point:3,
      imgPath:"/images/avatar4.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:8,
      name:"Mauricio Patiño",
      point:3,
      imgPath:"/images/avatar8.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 6,
    name: "Tamper",
    description:
      "Dignissim dolor labore eos diam sadipscing rebum amet volutpat amet nobis aliquyam labore ex wisi dolor takimata facilisi. At ad molestie ea justo lorem sadipscing rebum no ea et adipiscing. Dolor minim et. Gubergren erat eirmod sit diam ipsum. Et consetetur eirmod amet sed sadipscing dignissim ut at justo dolor eleifend est et ea. Velit erat diam invidunt amet duis eu duis diam ut accumsan congue. Aliquip dolor ipsum gubergren.",
    price: 6.6,
    imgPath: "/images/tamper.png",
    size: 1000,
    category: "Accesorios",
    discount: 10,
    review:[
      {
      id:4,
      name:"Jorge Echavarria",
      point:3,
      imgPath:"/images/avatar4.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:8,
      name:"Mauricio Patiño",
      point:3,
      imgPath:"/images/avatar8.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 7,
    name: "Tazas para espresso",
    description:
      "Lorem esse dolor nihil sed tempor lorem labore eos sed eirmod et dolor eos praesent accusam consetetur. Justo diam amet invidunt. Dignissim rebum eos rebum sit consequat ut commodo tation labore voluptua diam dolor kasd diam no amet sea. Sed dolore voluptua velit labore. Est voluptua et diam sed quis diam in gubergren sed et odio eos magna. Aliquyam augue sit diam voluptua sit qui sadipscing amet. Ipsum sea sadipscing clita eos euismod laoreet accumsan laoreet sit takimata.",
    price: 7.7,
    imgPath: "/images/tazas-espresso.png",
    size: 1000,
    category: "Accesorios",
    discount: 10,
    review:[
      {
      id:4,
      name:"Jorge Echavarria",
      point:3,
      imgPath:"/images/avatar4.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:8,
      name:"Mauricio Patiño",
      point:3,
      imgPath:"/images/avatar8.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 8,
    name: "Termómetro",
    description:
      "Ut dolor sed consectetuer tation. Takimata et sed eirmod dolores sit diam clita et voluptua ut voluptua et amet sit diam accumsan iusto elit. Magna tempor vel odio ullamcorper nostrud dolor at et sadipscing hendrerit sadipscing sit. Stet aliquyam no sea magna feugait. Nonummy feugait et dolor. Diam amet sit dolore diam nisl dolor diam diam esse sadipscing in nihil nonumy eos ea elitr erat. Sed at augue lorem nonumy sanctus et in at consequat erat diam diam vero blandit. ",
    price: 8.8,
    imgPath: "/images/termometro.png",
    size: 1000,
    category: "Accesorios",
    discount: 10,
    review:[
      {
      id:4,
      name:"Jorge Echavarria",
      point:3,
      imgPath:"/images/avatar4.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:8,
      name:"Mauricio Patiño",
      point:3,
      imgPath:"/images/avatar8.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 9,
    name: "Vaso medidor",
    description:
      "Justo amet et vero velit sadipscing magna ea voluptua tation rebum labore sea labore dolore consequat stet nonumy. Kasd et lorem ut labore illum iusto lorem elitr diam et dolor dolor eos et diam erat volutpat clita. Minim erat sea stet dolor diam dolore lorem at ipsum velit. Et labore diam sed ea dolor nonumy clita stet. Nonumy vero zzril at dolores kasd sadipscing amet dolor et ut zzril ullamcorper dolore vulputate sed. ",
    price: 9.9,
    imgPath: "/images/vaso-medidor.png",
    size: 1000,
    category: "Accesorios",
    discount: 10,
    review:[
      {
      id:4,
      name:"Jorge Echavarria",
      point:3,
      imgPath:"/images/avatar4.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:8,
      name:"Mauricio Patiño",
      point:5,
      imgPath:"/images/avatar8.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 10,
    name: "Vasos para latte",
    description:
      "Ea duo autem sit sit iriure dolor at et ut erat accusam justo autem qui. Eleifend sadipscing commodo nulla nonummy duis magna est duo ea diam accusam accusam nonumy assum elitr sea. Dolor liber voluptua iusto et justo nisl elitr. Et stet dolores sea rebum tempor et invidunt vero consectetuer sit eu labore invidunt diam labore illum delenit magna. Aliquyam et eirmod vel stet ipsum ea sanctus diam eirmod dolore. ",
    price: 10.1,
    imgPath: "/images/vasos-latte.png",
    size: 1000,
    category: "Accesorios",
    discount: 10,
    review:[
      {
      id:4,
      name:"Jorge Echavarria",
      point:1,
      imgPath:"/images/avatar4.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:8,
      name:"Mauricio Patiño",
      point:4,
      imgPath:"/images/avatar8.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 11,
    name: "Cafe Expresso Suave",
    description:
      "Ea duo autem sit sit iriure dolor at et ut erat accusam justo autem qui. Eleifend sadipscing commodo nulla nonummy duis magna est duo ea diam accusam accusam nonumy assum elitr sea. Dolor liber voluptua iusto et justo nisl elitr. Et stet dolores sea rebum tempor et invidunt vero consectetuer sit eu labore invidunt diam labore illum delenit magna. Aliquyam et eirmod vel stet ipsum ea sanctus diam eirmod dolore. ",
    price: 10.1,
    imgPath: "/images/cafeFuerte.png",
    size: 500,
    category: "Café",
    discount: 10,
    review:[
      {
      id:4,
      name:"Jorge Echavarria",
      point:2,
      imgPath:"/images/avatar4.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:8,
      name:"Mauricio Patiño",
      point:5,
      imgPath:"/images/avatar8.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      }
    ]
  },
  {
    id: 12,
    name: "Cafe Expresso Fuerte",
    description:
      "Ea duo autem sit sit iriure dolor at et ut erat accusam justo autem qui. Eleifend sadipscing commodo nulla nonummy duis magna est duo ea diam accusam accusam nonumy assum elitr sea. Dolor liber voluptua iusto et justo nisl elitr. Et stet dolores sea rebum tempor et invidunt vero consectetuer sit eu labore invidunt diam labore illum delenit magna. Aliquyam et eirmod vel stet ipsum ea sanctus diam eirmod dolore. ",
    price: 20.1,
    imgPath: "/images/cafeFuerte.png",
    size: 1000,
    category: "Café",
    discount: 10,
    review:[
      {
      id:4,
      name:"Jorge Echavarria",
      point:1,
      imgPath:"/images/avatar4.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."
      },
      {
      id:8,
      name:"Mauricio Patiño",
      point:4,
      imgPath:"/images/avatar8.png",
      comment:"Excepteur pariatur in culpa adipisicing exercitation irure nulla deserunt non ipsum fugiat tempor velit. Aliqua ad culpa qui nulla nulla mollit nulla occaecat. Commodo anim ea nostrud aliquip eiusmod deserunt quis dolor non id. Occaecat velit ullamco cupidatat irure ad amet aliqua."

      }
    ]
  }
];

module.exports = products;
