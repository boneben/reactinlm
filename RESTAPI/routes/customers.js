const route = require('express').Router();

const authorization = require('../auth/auth.js');
const customers = require('../controllers/customerController.js');


route.post('/', authorization, customers.createCustomer)
route.get("/all", authorization, customers.getCustomers);
route.get("/:id", authorization, customers.getCustomerById);
route.delete('/:id', authorization, customers.deleteCustomerById)


module.exports = route;