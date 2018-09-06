import User from '../models/User.model';
import Admin from '../models/Admin.model';

const adminController = {

  /**
     *
     */
  attemptSignin(req, res) {
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
      return res.status(400).send({ errors });
    }
    const email = req.body.email.toLowerCase();
    const [password] = [req.body];

    const findAdmin = Admin.findByEmail(email);

    if (!findAdmin) {
      return res.status(404).send({ message: 'email does not exist' });
    }
    const checkPassword = Admin.matchPassword(findAdmin.password, password);
    if (!checkPassword) {
      return res.status(404).send({
        message: 'invalid password',
      });
    }
    findAdmin.password = '********';
    return res.status(200).send({
      message: 'signin successful',
      admin: findAdmin,
    });
  },

  /**
     *
     */
  fetchAllUsers(req, res) {
    const fetchUsers = User.findAll();

    if (!fetchUsers) {
      return res.status(404).send({ message: 'No Registered Users' });
    }
    return res.status(200).send({
      foundUsers: fetchUsers,
    });
  },

};

export default adminController;
