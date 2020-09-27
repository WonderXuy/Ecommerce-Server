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
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };
}

module.exports = OrderController;