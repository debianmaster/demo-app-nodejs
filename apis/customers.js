const express = require('express');
const router = express.Router();

// Mock data for demonstration
const customerAccounts = {
    "Joanna": [123, 234],
    "Mike": [345, 456]
};

// GET /customers/:customerId - Retrieves accounts associated with a customer ID
router.get('/:customerId', (req, res) => {
    const customerId = req.params.customerId;
    const accounts = customerAccounts[customerId] || [];
    res.json({ accounts });
});

module.exports = router;