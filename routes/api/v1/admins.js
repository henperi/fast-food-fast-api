import express from 'express';

// Import Relevant Controllers
import adminsController from '../../../app/controllers/adminsController';
import usersController from '../../../app/controllers/usersController';
import ordersController from '../../../app/controllers/ordersController';

const router = express.Router();

router.post('/signin', adminsController.attemptSignin);
router.get('/all-users', usersController.fetchAllUsers);

router.get('/orders', ordersController.fetchAllOrders);
router.get('/orders/:order_id', ordersController.fetchOneOrder);

router.use('', (req, res) => res.status(404).json({ message: 'This endpoint does not exist' }));

module.exports = router;
