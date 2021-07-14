var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/admin/signin");
});

// router.get('/', adminController.viewDashboard);

module.exports = router;
