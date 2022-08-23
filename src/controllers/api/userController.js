let db = require("../../database/models")

module.exports = {
    
    listAll : async(req, res)  => {
        const url = "localhost:3001/api/users/";
        const limit = 10;
        let usersArray = [0];
        const offset = req.query.page && req.query.page > 0 ? req.query.page : 0;
        try{
            totalUsers = await db.User.findAndCountAll({
                limit: limit,
                offset: offset *limit,
                attributes: ["id","name", "email"],
            }).then(({rows,count}) => {
              rows.forEach(element => {
                 element = { 
                    id : element.id,
                    name: element.name,
                    email: element.email,
                    urlDetail: url + element.id
                   } 
                   usersArray.push(element)
                });
                res.status(200).json({
                count: count,
                users: usersArray
            })
        })

      } catch (error){
         console.log(error)
     }
 },
    detail : async(req, res) => {
        
        const userId = req.params.id;
        const filePath = "localhost:3001"
        try{
            user = await db.User.findByPk(userId)
            .then((user) => {
                
                res.status(200).json({
               // user: user
               id : user.id,
               name: user.name,
               lastname : user.lastname,
               email: user.email,
               imgPath: filePath + user.imgPath,
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


