const router = require("express").Router();
const apiController = require('../controllers/apiController');
// const auth = require("../middlewares/auth");

// landing page
router.get('/landing-page', apiController.landingPage);



module.exports = router;