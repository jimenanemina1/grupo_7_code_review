const { send } = require("express/lib/response");
let db = require("../../database/models");
const products = require("../data");

module.exports = {
    
    listAll : async(req, res)  => {
        const limit = 10;
        const offset = req.query.page && req.query.page > 0 ? req.query.page : 0;
        const url = 'localhost:3001/api/products/'
        let productsArray = [];
        try{
            totalProducts = await db.Product.findAndCountAll({
                limit: limit,
                offset: offset *limit,
                attributes: ["id","name","description"],
                include: [{association: 'reviews'}]
                }).then(({rows,count}) => {
                    rows.forEach(element => {
                        element = { 
                           id : element.id,
                           name: element.name,
                           description: element.description,
                           reviews: element.reviews,
                           urlDetail: url + element.id
                          } 
                          productsArray.push(element)
                       });
                       
                             res.status(200).json({
                                count: count,
                                products: productsArray
                                 })             
                })
          } catch (error) {
              console.log(error)
          }
   },
    detail : async(req, res) => {
        
        const productId = req.params.id;
        const filePath = "localhost:3001"
        try{
            product = await db.Product.findByPk(productId,{include: [{association: 'reviews'}]})
            .then((product) => {          
            res.status(200).json({
               id : product.id,
               name: product.name,
               price: product.price,
               discount: product.discount,
               size: product.size,
               description: product.description,
               imgPath: filePath + product.imgPath,
               stock: product.stock,
               categories_id: product.categories_id,
               offer: product.offer,
               reviews: product.reviews
            })
  })

      } catch (error){
         console.log(error)
     }  
    }
}