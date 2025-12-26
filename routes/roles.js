const express = require("express");
const router = express.Router();
const { VarifyToken } = require("../middlewares/auth-middleware");
const { AuthorizationRoles } = require("../middlewares/authorization-roles");

// Only Admin can access this route
router.get("/admin", VarifyToken, AuthorizationRoles("Admin"), (req, res) => {
  res.send("This is Admin route");
});

// Only Admin and Manager can access this route
router.get(
  "/manager",
  VarifyToken,
  AuthorizationRoles("Admin", "Manager"),
  (req, res) => {
    res.send("This manager route");
  }
);

// All can access this route
router.get(
  "/user",
  VarifyToken,
  AuthorizationRoles("User", "Admin", "User"),
  (req, res) => {
    res.send("This usser route");
  }
);

module.exports = router;
