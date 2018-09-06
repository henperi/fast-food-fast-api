import moment from 'moment';
import randomId from 'uuid';

class Admin {
  /**
     * class constructor
     */
  constructor() {
    this.admin = [
      {
        id: randomId.v4(),
        fullname: 'Henry Guy',
        username: 'henperi',
        email: 'henperi@gmail.com',
        password: '123abc',
        mobile: '08067777',
        address: 'Nigeria',
        role: 'Admin',
        createdAt: moment.now(),
        updatedAt: moment.now(),
      },
    ];
  }

  /**
     * @param {randomId} id
     * @returns {object} admin object
     */
  findByEmail(email) {
    return this.admin.find(admin => admin.email === email);
  }

  matchPassword(foundPassword, password) {
    if (this.foundPassword === password) return true;
    return false;
  }

  /**
     * @param {randomId} id
     * @returns {object} admin object
     */
  findOne(id) {
    return this.admin.find(admin => admin.id === id);
  }
}

export default new Admin();
