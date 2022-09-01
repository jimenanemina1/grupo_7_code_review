let db = require("../../database/models")

module.exports = {
    
    listAll : async(req, res)  => {
        const url = "localhost:3001/api/order/";
        const limit = 10;
        let ordersArray = [];
        let totalRevenue = 0;
        const offset = req.query.page && req.query.page > 0 ? req.query.page : 0;
        try{
            totalOrders = await db.Order.findAndCountAll({
                limit: limit,
                offset: offset *limit,
                attributes: ["id","users_id", "ammount","billing_address","shipping_address","order_email","order_date","status_orders_id"],
            }).then(({rows,count}) => {
              rows.forEach(element => {
                totalRevenue = totalRevenue + parseFloat(element.ammount);
                 element = { 
                    id : element.id,
                    users_id: element.name,
                    ammount: parseFloat(element.ammount),
                    billing_address: url + element.id,
                    shipping_address: element.shipping_address,
                    order_email: element.order_email,
                    order_date: element.order_date,
                    status_orders_id: element.status_orders_id
                   } 
                   ordersArray.push(element)
                });
                res.status(200).json({
                count: count,
                totalRevenue: totalRevenue,
                orders: ordersArray
            })
        })

      } catch (error){
         console.log(error)
     }
 },
    detail : async(req, res) => {
        
        const orderId = req.params.id;
        try{
            user = await db.Order.findByPk(orderId)
            .then((order) => {
            res.status(200).json({
               id : orderId,
               users_id: order.users_id,
               ammount : order.ammount,
               billing_address: order.billing_address,
               shipping_address: order.shipping_address,
               order_email: order.order_email,
               order_date: order.order_date,
               status_orders_id: order.status_orders_id
                })
  })
      } catch (error){
         console.log(error)
     }  
    }
}


