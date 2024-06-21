const express = require ("express")
const AuthControllers = require ("../controllers/AuthControllers.js")

const router = express.Router();

router.post('/register', AuthControllers.register)
router.post('/login', AuthControllers.login)
router.post('/ProfileAkun', AuthControllers.updateProfile)



module.exports = router