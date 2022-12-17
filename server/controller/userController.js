import User from "../model/user-schema.js";

export const userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      res.status(401).json({ message: "User already exist" });
    }
    const user = req.body; 
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
export const userLogin = async (req, res) => {
  try {
    let Username = req.body.username;
    let Password = req.body.password;
    let user = await User.findOne({ username: Username, password: Password });
    if (user) {
      res.status(200).json({data:user});
    } else {
      res.status(401).json("invalid Username or Password");
    }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
};
