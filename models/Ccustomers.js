const mongoose = require("mongoose")

const customersSchoma = new mongoose.Schema({

})
const CustomersModel = mongoose.model("customers",customersSchoma)
module.exports = CustomersModel


