const express = require("express");
const { userController } = require("../controllers/User.controller");
const upload = require("../middlewares/multer.middleware");
const authenticateToken = require("../middlewares/authenticate_token.middleware");
const router = express.Router();

router.get("/users",authenticateToken, userController.getAll);
router.get("/users/:id",authenticateToken, userController.getOne);
router.patch("/users/:id",authenticateToken, userController.update);
router.delete("/users/:id",authenticateToken, userController.delete);
router.post("/users", upload.single("src"), userController.post);
router.post("/login", userController.login);
router.get("/verify/:token", userController.verify);

module.exports = router