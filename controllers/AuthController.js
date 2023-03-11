import UserModel from "../models/userModel.js";
// import jwt from "jsonwebtoken";

// Register new user - Sign Up
export const registerUser = async (req, res) => {
  // console.log(req.body);
  const { pseudo, email, password } = req.body; // destructuring
  try {
    const user = await UserModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    // res.status(200).send({ err})
    res.status(500).json(err);
  }

  //   const newUser = new UserModel(req.body);
  //   const { pseudo, email, password } = req.body;
  //   try {
  //     // addition new
  //     const oldUser = await UserModel.findOne({ username });
  //     if (oldUser)
  //       return res.status(400).json({ message: "User already exists" });
  //     // changed
  //     const user = await newUser.save();
  //     const token = jwt.sign(
  //       { username: user.username, id: user._id },
  //       process.env.JWTKEY,
  //       { expiresIn: "1h" }
  //     );
  //     res.status(200).json({ user, token });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // };

  // // Login User - Sign In
  // export const loginUser = async (req, res) => {
  //   const { username, password } = req.body;
  //   try {
  //     const user = await UserModel.findOne({ username: username });
  //     if (user) {
  //       const validity = await bcrypt.compare(password, user.password);
  //       if (!validity) {
  //         res.status(400).json("wrong password");
  //       } else {
  //         const token = jwt.sign(
  //           { username: user.username, id: user._id },
  //           process.env.JWTKEY,
  //           { expiresIn: "1h" }
  //         );
  //         res.status(200).json({ user, token });
  //       }
  //     } else {
  //       res.status(404).json("User not found");
  //     }
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
};
