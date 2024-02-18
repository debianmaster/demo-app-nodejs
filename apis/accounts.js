const express = require('express');
const router = express.Router();

// GET /accounts/:id - Retrieves account details by ID
router.get('/:id', (req, res) => {
    const accountId = req.params.id;
    res.json({ accountId });
});

module.exports = router;