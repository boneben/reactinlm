const db = require('mongoose');
const Customer = require('../models/customer');

exports.getCustomers = (req, res) => {
    Customer.find().then(data => res.status(200).json(data))
}

exports.getCustomerById = (req, res) => {   
    Customer.findOne({ _id: req.params.id }).then(data => res.status(200).json(data))
}

exports.createCustomer = (req, res) => {

    const customer = new Customer(
        {
            _id:        new db.Types.ObjectId,
            firstname:  req.body.firstname,
            lastname:   req.body.lastname,
            address:    req.body.address
        }
    ) 

    customer.save()
    .then(() => {
        res.status(201).json({
            message: 'Customer created!',
            data: customer
            
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Unable to create customer',
            error: error
        })
    })

}

exports.deleteCustomerById = (req, res) => {
    Customer.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).json({
            message: 'Customer removed!'
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Unable to remove customer',
            error: error
        })
    })
}