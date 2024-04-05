const { register } = require("../controllers/usersController");
const { login } = require("../controllers/usersController");
const { setAvatar} = require("../controllers/usersController");
const { getAllUsers } =require("../controllers/usersController");

const router = require("express").Router();
//The Router class is used to create modular, mountable route handlers.
router.post("/register",register);
router.post("/login",login);
router.post("/setAvatar/:id",setAvatar);
router.get("/allusers/:id", getAllUsers);


module.exports = router; 