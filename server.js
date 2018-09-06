import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import expressValidator from 'express-validator';


// Routes =========================================
import userRoute from './routes/api/v1/users';
import adminRoute from './routes/api/v1/admins';
import ordersRoute from './routes/api/v1/orders';

const app = express();

// Some neccessary middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    const namespace = param.split('.');
    const root = namespace.shift();
    let formParam = root;

    while (namespace.length) {
      formParam += `[${namespace.shift()}]`;
    }
    return {
      param: formParam,
      msg,
      value,
    };
  },
}));


app.use('/api/v1/users', userRoute);
app.use('/api/v1/admins', adminRoute);

app.use('/api/v1/orders', ordersRoute);

app.get('/', (req, res) => res.status(200).send({
  message: 'This is an API, not a website. Learn your endpoints',
}));

app.use('', (req, res) => res.status(404).json({ message: 'This endpoint does not exist' }));


// Define The Port and Host
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
// const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;

// Start the node server
app.listen(PORT, HOST, () => {
  console.log(`Server Runining Successfully On PORT: ${PORT}`);
});
