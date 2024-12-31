const express = require("express");

const router = express.Router();
const todocontroller = require("../../controllers/todocontroller");


router.post("/" , todocontroller.createtodo);
router.delete("/", todocontroller.deletetodo);
router.get("/", todocontroller.gettodos);

module.exports = router;