const { send } = require("express/lib/response");
let db = require("../../database/models")

module.exports = {
    
    listAll : async(req, res)  => {
        const limit = 10;
        const offset = req.query.page && req.query.page > 0 ? req.query.page : 0;
        try{
            totalProducts = await db.Product.findAndCountAll({
                limit: limit,
                offset: offset *limit,
                attributes: ["id","name","description"],
            }).then(({rows,count}) => {
                res.status(200).json({
                count: count,
                products: rows
            })
        })
      } catch (error){
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
               // user: user
               id : product.id,
               name: product.name,
               price: product.price,
               discount: product.discount,
               size: product.size,
               description: product.description,
               imgPath: filePath + product.imgPath,
               stock: product.stock,
               categories_id: product.categories_id,
               offer: product.offer
            })
  })

      } catch (error){
         console.log(error)
     }  
    }
}


