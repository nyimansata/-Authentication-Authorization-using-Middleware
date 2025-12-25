const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../mdels/user");

const Register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hashedPassword(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      role: req.body.role,
    });

    await newUser.save();
    res
      .status(201)
      .send({ message: `"User registered successfully" ${newUser} ` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const loginUser = await User.findOne({
      username: req.body.username,
    });

    if (!loginUser) {
      return res.status(404).send({ message: "User not found" });
    }
    // check password
    const isMatch = await bcrypt.compare(req.body.password, loginUser.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    // create token
    const token = jwt.sign(
      { id: loginUser._id, role: loginUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.send({ message: "Login successful", token });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { Register, Login };
