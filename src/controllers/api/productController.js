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
        
        const userId = req.params.id;
        try{
            res.send ("soy el detalle de productos")

      } catch (error){
         console.log(error)
     }  
    }
}


