import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

async function creatUserHandler(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ message: "username and password are required" });
  }

  const foundUser = await User.findOne({ username });

  if (foundUser) {
    return res.json({ message: "username already taken" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log("impossible");
    return res.sendStatus(400);
  }
}

async function updateUserHandler(req, res) {
  const { id, username, password } = req.body;
  if (!username || !password) {
    return res.json({ message: "one of your username or password are missed" });
  }
  try {
    const user = await User.findByIdAndUpdate(id, { username, password });
    return res.json({ message: "Your Username and Password has changed" });
  } catch (error) {
    return res.sendStatus(500);
  }
}

async function deleteUserHandler(req, res) {
  const { id, username, password } = req.body;
  if (!username || !password) {
    return res.json({ message: "impossible to delete use" });
  }
  const user = await User.deleteOne({ username, password });
  return res.json({ message: "user deleted" });
}
export { creatUserHandler, updateUserHandler, deleteUserHandler };
