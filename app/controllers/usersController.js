import User from '../models/User.model';

const usersController = {
  /**
     *
     */
  attemptSignup(req, res) {
    req.checkBody('username', 'username is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password_confirmation', 'Passwords do not match').equals(req.body.password);
    req.checkBody('fullname', 'fullname is required').notEmpty();
    req.checkBody('mobile', 'Mobile is required').notEmpty();
    req.checkBody('address', 'Address is required').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
      return res.status(400).json({ errors });
    }
    const [username] = [req.body.username];
    const email = req.body.email.toLowerCase();
    const [password] = [req.body.password];
    const [fullname] = [req.body.fullname];
    const [mobile] = [req.body.mobile];
    const [address] = [req.body.address];

    const newUser = {
      username, email, password, fullname, mobile, address,
    };
    const createdUser = User.createUser(newUser);
    return res.status(201).json({
      message: 'Signup Successful', createdUser,
    });
  },

  /**
     *
     */
  attemptSignin(req, res) {
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
      return res.status(400).json({ errors });
    }
    const email = req.body.email.toLowerCase();
    const [password] = [req.body];

    const findUser = User.findByEmail(email);

    if (!findUser) {
      return res.status(404).json({ message: 'email does not exist' });
    }
    const checkPassword = User.matchPassword(findUser.password, password);
    if (!checkPassword) {
      return res.status(404).json({
        message: 'invalid password',
      });
    }
    findUser.password = '********';
    return res.status(200).json({
      message: 'signin successful',
      user: findUser,
    });
  },

  /**
     *
     */
  fetchAllUsers(req, res) {
    const fetchUsers = User.findAll();

    if (!fetchUsers) {
      return res.status(404).json({ message: 'No Registered Users' });
    }
    return res.status(200).json({
      foundUser: fetchUsers,
    });
  },

};

export default usersController;
