const express = require ("express")
const AuthControllers = require ("../controllers/AuthControllers.js")
const { verifyToken } = require("../middleware/verifyToken");


const router = express.Router();

router.post('/register', AuthControllers.register)
router.post('/login', AuthControllers.login)
router.get('/profile', AuthControllers.getProfile);



module.exports = router