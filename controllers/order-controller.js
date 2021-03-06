const service = require('../services/order-service');
class OrderController {
    constructor(){};
    getAllOrders = async (req, res) => {
        try {
            const result = await service.getAll(req);
            if (result.length > 0) {
                res.status(200).json({
                    orders: result,
                });
            }
            else {
                res.json({message: 'No orders founds'});
            }
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };

    getOrderById = async (req, res) => {
        try {
            const result = await service.getById(req);
            if (result.length > 0) {
                res.status(200).json(result);
            }
            else {
                res.json({message: `No orders found with order id ${req.params.orderId}`});
            }
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }

    addOrder = async (req, res) => {
        try {
            const result = await service.add(req, res);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }
}

module.exports = OrderController;