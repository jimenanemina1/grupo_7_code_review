let db = require("../../database/models")

module.exports = {
    
    listAll : async(req, res)  => {
        const url = "localhost:3001/api/category/";
        const limit = 10;
        let categoriesArray = [];
      //  let totalRevenue = 0;
        const offset = req.query.page && req.query.page > 0 ? req.query.page : 0;
        try{
            totalOrders = await db.Category.findAndCountAll({
                limit: limit,
                offset: offset *limit,
                attributes: ["id","name"],
            }).then(({rows,count}) => {
          
                res.status(200).json({
                count: count,
                categories: rows
            })
        })

      } catch (error){
         console.log(error)
     }
 },
    detail : async(req, res) => {
        
        const categoryId = req.params.id;
        let count = 0;
        try{
            category = await db.Category.findByPk(categoryId, {include: [{association: 'products'}]})
            .then((category) => {
                productsArray = category.products;
                productsArray.forEach(element => {
                    
                      count = count + 1
                   });
            res.status(200).json({
               id : categoryId,
               name: category.name,
               products: productsArray,
               productsTotal: count
               

                })
  })
      } catch (error){
         console.log(error)
     }  
    }
}


