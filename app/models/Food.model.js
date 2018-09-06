import moment from 'moment';
import randomId from 'uuid';

class Food {
  /**
     * class constructor
     */
  constructor() {
    this.foods = [
      {
        id: 'a15a4e1b-5113-48ff-8fb5-8c9cfb4f8f2d',
        foodName: 'Chiken Rice and stew',
        description: 'nice rice delicacy',
        cover_img: '',
        price: 3500,
        quantity_available: 5,
        createdAt: moment.now(),
        updatedAt: moment.now(),
      },
    ];
  }

  /**
     *
     * @param {*} data
     * @returns {object} food ubject
     */
  createfood(data) {
    const newFood = {
      id: randomId.v4(),
      foodName: data.foodName,
      description: data.description,
      cover_img: data.cover_img,
      price: data.price,
      quantity_available: data.quantity,
      createdAt: moment.now(),
      updatedAt: moment.now(),
    };

    this.foods.push(newFood);
    return newFood;
  }

  /**
     * @param {randomId} id
     * @returns {object} food object
     */
  findByName(foodName) {
    return this.foods.find(food => food.foodName === foodName);
  }

  /**
     * @param {randomId} id
     * @returns {object} food object
     */
  findOne(id) {
    return this.foods.find(food => food.id === id);
  }

  /**
     *
     */
  findAll() {
    return this.foods;
  }
}

export default new Food();
