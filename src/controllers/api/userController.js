const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");


const User = require("../../models/User");
let db = require("../../database/models")

module.exports = {
    
    list : async(req, res)  => {

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
    detail : (req, res) => {
        
    },
    update : (req, res) => {
        
    },
    
}


