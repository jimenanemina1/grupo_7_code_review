const data = require("./data")
const productsController = {
    detail: (req,res) =>{
        const product = data.find(items => items.id == req.params.idProduct)
        res.render('productDetail',{items:product}) 
   
    },
    list: () => data
}

module.exports = productsController ;

