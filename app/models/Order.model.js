import moment from 'moment';
import randomId from 'uuid';

class Order {
  /**
     * class constructor
     */
  constructor() {
    this.orders = [];
  }

  /**
     *
     * @param {userId} userId
     * @param {data} data
     * @returns {object} created order object
     */
  createOrder(userId, data) {
    const newOrder = {
      id: randomId.v4(),
      orderId: randomId.v1(),
      food_id: data.food_id || randomId.v4(),
      ordered_by: userId,
      food_name: data.food_name,
      cover_img: data.cover_img,
      amount: data.amount,
      quantity: data.quantity,
      order_status: 'Processing',
      delivery_status: 'Pending',
      createdAt: moment.now(),
      updatedAt: moment.now(),
    };

    this.orders.push(newOrder);
    return newOrder;
  }

  /**
     * @param {orderId} required
     * @param {userId} (optional)
     * @returns {object} one order object
     */
  findOne(orderId, userId) {
    let foundOrder;
    if (!userId) {
      foundOrder = this.orders.find(order => order.orderId === orderId);
    }
    if (orderId && userId) {
      foundOrder = this.orders.find(
        order => order.orderId === orderId && order.ordered_by === userId,
      );
    }
    return foundOrder;
  }


  /**
     * @param {randomId} id
     * @returns {object} orders object
     */
  findUserOrders(userId) {
    return this.orders.find(order => order.ordered_by === userId);
  }


  /**
     * @returns {object} orders object
     */
  findAll() {
    return this.orders;
  }
}

export default new Order();
