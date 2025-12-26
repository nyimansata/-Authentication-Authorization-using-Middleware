const AuthorizationRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).send({
        message: "Access denied, you dont have permission to access this route",
      });
    }
    next();
  };
};

module.exports = { AuthorizationRoles };
