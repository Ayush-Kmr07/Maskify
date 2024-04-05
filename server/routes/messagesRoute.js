const { addMessage} = require("../controllers/messagesController");
const { getAllMessage } = require("../controllers/messagesController");

const router = require("express").Router();
//The Router class is used to create modular, mountable route handlers.
router.post("/addmsg/",addMessage);
router.post("/getmsg",getAllMessage);


module.exports = router; 