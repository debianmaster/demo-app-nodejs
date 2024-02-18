const express = require('express');
const accountsRouter = require('./apis/accounts');
const customersRouter = require('./apis/customers');

const app = express();
const port = 3000;

// Routes
app.use('/accounts', accountsRouter);
app.use('/customers', customersRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});