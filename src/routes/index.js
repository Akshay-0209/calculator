const express = require('express');
const authRoutes = require('./auth');
const customerRoutes = require('./customers');
const dealRoutes = require('./deals');
const activityRoutes = require('./activities');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/customers', customerRoutes);
router.use('/deals', dealRoutes);
router.use('/activities', activityRoutes);

module.exports = router;
