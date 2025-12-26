const express = require("express");
const router = express.Router();
const { VarifyToken } = require("../middlewares/auth-middleware");
const { AuthorizationRoles } = require("../middlewares/authorization-roles");

// Only Admin can access this route
router.get("/admin", VarifyToken, AuthorizationRoles("admin"), (req, res) => {
  res.send("This is Admin route");
});

// Only Admin and Manager can access this route
router.get(
  "/manager",
  VarifyToken,
  AuthorizationRoles("admin", "manager"),
  (req, res) => {
    res.send("This manager route");
  }
);

// All can access this route
router.get(
  "/user",
  VarifyToken,
  AuthorizationRoles("user", "admin", "user"),
  (req, res) => {
    res.send("This usser route");
  }
);

module.exports = router;
