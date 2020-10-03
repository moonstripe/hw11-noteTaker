const router = require('express').Router();
const userRoutes = require('./noteRoutes');

// api prepended to every Route
// _ denotes parameter unused.
router.use('/notes', userRoutes);


module.exports = router;
