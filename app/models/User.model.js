import moment from 'moment';
import randomId from 'uuid';

class User {
  /**
     * class constructor
     */
  constructor() {
    this.users = [
      {
        id: 'a15a4e1b-5113-48ff-8fb5-8c9cfb4f8f2d',
        fullname: 'Henry Guy',
        username: 'henperi',
        email: 'henperi@gmail.com',
        password: '123abc',
        mobile: '08067777',
        address: 'Nigeria',
        role: 'User',
        createdAt: moment.now(),
        updatedAt: moment.now(),
      },
    ];
  }

  /**
     *
     * @param {*} data
     * @returns {object} user ubject
     */
  createUser(data) {
    const newUser = {
      id: randomId.v4(),
      fullname: data.fullname,
      username: data.username,
      email: data.email,
      password: data.password,
      mobile: data.mobile,
      address: data.address,
      createdAt: moment.now(),
      updatedAt: moment.now(),
    };

    this.users.push(newUser);
    return newUser;
  }

  /**
     * @param {randomId} id
     * @returns {object} user object
     */
  findByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  matchPassword(foundPassword, password) {
    if (this.foundPassword === password) return true;
    return false;
  }

  /**
     * @param {randomId} id
     * @returns {object} user object
     */
  findOne(id) {
    return this.users.find(user => user.id === id);
  }

  /**
     *
     */
  findAll() {
    return this.users;
  }
}

export default new User();
