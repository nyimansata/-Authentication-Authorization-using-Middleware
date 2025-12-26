const jwt = require("jsonwebtoken");

const VarifyToken = (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    return res.status(401).send({ message: "Access denied, no token" });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
    clg("token verified", decode);
  } catch (error) {
    res.status(401).send({ message: "Invalid token" });
  }
};

module.exports = { VarifyToken };
