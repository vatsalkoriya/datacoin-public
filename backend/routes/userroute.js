const express = require("express")
const {getUserProfile,getUsers,deleteProfile,toogleUserBlock} = require("../controllers/userController")

const authMiddlewares = require("../middlewares/auth")
const adminMiddleware = require('../middlewares/admin')

const router = express.Router();

router.use(authMiddlewares)

router.get("/",adminMiddleware,getUsers)
router.get("/profile",getUserProfile)
router.put("/:id/block",adminMiddleware, toogleUserBlock)
router.delete("/:id",adminMiddleware,deleteProfile)

module.exports = router;