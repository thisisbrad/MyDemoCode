const morgan = require('morgan');
const debug = require('debug')('api:info');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');

module.exports = app => {
  /* Always used middleware */
  app.set('trust proxy', 1); // trust first proxy
  app.use(cors());
  app.use(json()); // req.body!
  app.use(urlencoded({ extended: true }));
  // const info = debug('info');
  // app.use(morgan('combined', { stream: { write: msg => info(msg) } }));
  app.use(morgan('dev'));
};
