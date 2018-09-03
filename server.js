import express from 'express';
import bodyParser from 'body-parser';
import moment from 'moment';
import randomId from 'uuid';
import morgan from 'morgan';
import expressValidator from 'express-validator';



const app = express();

app.use(express.json());
app.use(bodyParser.json());
app,use(morgan('dev'));

app.get('/', (req, res) => res.status(200).send({
  message: 'Default endpoint is working well',
}));

// Define The Port and Host
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;

// Start the node server
app.listen(PORT, HOST, () => {
  console.log(`Server Runining Successfully On PORT: ${PORT}`);
});
