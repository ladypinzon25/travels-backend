const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//Settings
app.set('port', process.env.PORT || 3002);
app.use(cors());

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/airplanes', require('./routes/Airplanes'));
app.use('/api/users', require('./routes/Users'));

//Server is listening
app.listen(app.get('port'), () => {
  console.log("port working", app.get('port'))
});