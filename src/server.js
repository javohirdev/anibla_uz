const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/error');
// Load env vars
dotenv.config({path : './config/config.env'})

// Connect DB
connectDB();    

app.use(express.json());    
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

// Dev logging middlewares
if(process.env.NODE_ENV === 'developer'){
    app.use(morgan('dev'));
} 


//Mount routes
app.use('/api/auth' , require('./routes/auth'));
app.use('/api/users' , require('./routes/users'));
app.use('/api/category' , require('./routes/categories'));

app.use(errorHandler);

const server = app.listen(PORT , 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.black.bold));

// Handle unhanled promise rejection
process.on('unhandledRejection' , (err , promise) => {
    console.log(`Error : ${err.message}`);
    // Close server and exit process
    server.close(() => process.exit(1));
});