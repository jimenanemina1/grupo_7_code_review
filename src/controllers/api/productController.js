const { send } = require("express/lib/response");
let db = require("../../database/models");
const products = require("../data");

module.exports = {
    
    listAll : async(req, res)  => {
        const limit = 10;
        let productsWithReviewsArray = [];
        let productsWithNoReviewsArray = [];

        const url = "localhost:3001/api/products/";
        const offset = req.query.page && req.query.page > 0 ? req.query.page : 0;
        let reviewsArray = [];
        let review;
        try{
            totalProducts = await db.Product.findAndCountAll({
                limit: limit,
                offset: offset *limit,
                attributes: ["id","name","description"]
        //        include: [{association: 'reviews'}]
                }).then(({rows,count}) => {
              //      rows.forEach(async product => {
         //               console.log(product)
//                               try{
//                                 productReviewObject = await db.Product_review.findOne({
//                                     where:{
//                                         products_id : product.id
//                                     }
//                                 })
//                                     if(!productReviewObject){
//                                         console.log("product no existe en tabla product_reviews")
//                                         product = { 
//                                             id : product.id,
//                                             name: product.name,
//                                             description: product.description,
//                                             urlDetail: url + product.id,
//                                             reviews: "Este producto aun no tiene reviews"
//                                             } 
//                                             productsWithReviewsArray.push(product)

//                                     } else {
//                                         review = productReviewObject.review_id; 
                                        
//                                     try{
//                                             productsReviews = await db.Review.findByPk(review)
//                                             .then((productReview) => {
//                                             reviewsArray.push(productReview.comment)
//                                                      })
//                                                     product = { 
//                                                         id : product.id,
//                                                         name: product.name,
//                                                         description: product.description,
//                                                         urlDetail: url + product.id,
//                                                         reviews: reviewsArray
//                                                         } 
//                                                  productsWithNoReviewsArray.push(product)

//                                     } catch (error){
//                                         console.log(error)
//                                     }
//                                 }
//                                 console.log("el array es")
// console.log(productsWithReviewsArray)
//                               } catch(error){
//                                   console.log(error)
//                               }
                        

           
            res.status(200).json({
                count: count,
                products: rows
                 })
         })
        }catch(error){
            console.log(error)
        }
    },
    detail : async(req, res) => {
        
        const productId = req.params.id;
        const filePath = "localhost:3001"
        try{
            product = await db.Product.findByPk(productId)
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
               reviews: "aca van las reviews de este producto"
            })
  })

      } catch (error){
         console.log(error)
     }  
    }
}