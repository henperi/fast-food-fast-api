import Order from '../models/Order.model';

const ordersController = {

  /**
     * @returns {object} All Orders object
     */
  fetchAllOrders(req, res) {
    const fetchOrders = Order.findAll();
    const count = fetchOrders.length;

    if (!fetchOrders) {
      return res.status(404).send({ message: 'No Orders Were Found' });
    }
    if (fetchOrders.length === 0) {
      return res.status(404).send({ message: 'No Orders Were Found' });
    }
    return res.status(200).send({
      totalOrders: count,
      orders: fetchOrders,
    });
  },


  /**
     * @returns {object} An Order object
     */
  fetchOneOrder(req, res) {
    const [orderId] = [req.params.orderId];
    const fetchOrder = Order.findOne(orderId);

    if (!fetchOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    if (fetchOrder.length === 0) {
      return res.status(404).json({
        message: 'Order not found',
      });
    }
    return res.status(201).json({
      message: 'Order found',
      order: fetchOrder,
    });
  },


  /**
     * @returns {object} An Order object for authenticated users
     */
  fetchMySingleOrder(req, res) {
    const [orderId] = [req.params.orderId];
    const userId = req.params.userId || 1;

    const fetchOrder = Order.findOne(orderId, userId);

    if (!fetchOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    if (fetchOrder.length === 0) {
      return res.status(404).send({ message: 'No Orders Were Found' });
    }
    return res.status(201).json({
      message: 'Order found', fetchOrder,
    });
  },

  /**
     * @returns {object} An Order object
     */
  fetchAllMyOrders(req, res) {
    const userId = req.params.userId || 1;

    const fetchOrder = Order.findUserOrders(userId);

    if (fetchOrder.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    if (fetchOrder.length === 0) {
      return res.status(404).send({ message: 'No Orders Were Found' });
    }
    return res.status(201).json({
      message: 'Order found', fetchOrder,
    });
  },

  /**
     * @returns {object} An Order object
     */
  makeAnOrder(req, res) {
    // if (req.body.food_id) {}
    req.checkBody('food_name', 'Name of food is required').notEmpty();
    req.checkBody('cover_img', 'Cover image is required').notEmpty();
    req.checkBody('amount', 'amount is not valid').notEmpty();
    req.checkBody('quantity', 'quantity is required').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
      return res.status(400).json({ errors });
    }
    const userId = req.params.userId || 1;

    const createdOrder = Order.createOrder(userId, req.body);
    return res.status(201).json({
      message: 'Order Created', createdOrder,
    });
  },


  /**
     * @returns {object} An Order object
     */
  updateOrderStatus(req, res) {
    req.checkBody('order_status', 'order status is required').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
      return res.status(400).json({ errors });
    }

    const [orderId] = [req.params.orderId];
    const findOrder = Order.findOne(orderId);

    if (!findOrder) {
      return res.status(409).json({
        message: 'This particular order can not be updated as it does not exist',
      });
    }
    if (findOrder.length === 0) {
      return res.status(409).json({
        message: 'This particular order can not be updated as it does not exist',
      });
    }
    findOrder.order_status = req.body.order_status;

    return res.status(201).json({
      message: 'Order updated',
      order: findOrder,
    });
  },

};

export default ordersController;
