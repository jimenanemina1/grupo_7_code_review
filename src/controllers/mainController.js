const data = require("./data")

const mainController = {
    home: (req,res) =>{
        res.render("index_", {data:data})
    }
}

module.exports = mainController;