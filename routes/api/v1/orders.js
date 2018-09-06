import express from 'express';

// Import Relevant Controllers
import ordersController from '../../../app/controllers/ordersController';

const router = express.Router();

router.get('/', ordersController.fetchAllOrders);
router.post('/', ordersController.makeAnOrder);

router.get('/:orderId', ordersController.fetchOneOrder);
router.put('/:orderId', ordersController.updateOrderStatus); // Update the status of an order

router.use('', (req, res) => res.status(404).json({ message: 'This endpoint does not exist' }));

module.exports = router;
