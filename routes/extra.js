const express = require("express");
const router = express.Router();

router.get("/privacy" , (req,res) => {
    res.render("./extra/privacy.ejs");
});

router.get("/terms" , (req,res) => {
    res.render("./extra/terms.ejs");
});

router.get("/FAQs" , (req,res) => {
    res.render("./extra/FAQs.ejs");
});

router.get("/about", (req, res) => {
  res.render("extra/about.ejs");
});

module.exports = router;