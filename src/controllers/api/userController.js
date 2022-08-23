let db = require("../../database/models")

module.exports = {
    
    listAll : async(req, res)  => {

        const limit = 10;
        const offset = req.query.page && req.query.page > 0 ? req.query.page : 0;
        try{
            totalUsers = await db.User.findAndCountAll({
                limit: limit,
                offset: offset *limit,
                attributes: ["id","name","email"],
            }).then(({rows,count}) => {
                res.status(200).json({
                count: count,
                users: rows
            })
        })

      } catch (error){
         console.log(error)
     }
 },
    detail : async(req, res) => {
        
        const userId = req.params.id;
        try{
            user = await db.User.findByPk(userId)
            .then((user) => {
                
                res.status(200).json({
               // user: user
               id : user.id,
               name: user.name,
               lastname : user.lastname,
               email: user.email,
               imgPath: user.imgPath,
               billing_addres: user.billing_addres,
               shipping_address: user.shipping_address,
               phone: user.phone
                })
  })
      } catch (error){
         console.log(error)
     }  
    }
}


