const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generatetoken = require("../config/generatetoken");

// /api/user? search=rohan
const allUsers = asyncHandler(async (req, res) => {
  console.log(req.query.search);
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },    //for case sensitive search
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  console.log(users);
  res.send(users);
});   //search every user except the logged in user 

const registerUser = asyncHandler(async(req,res) => {
    const {name, email, password, pic } = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

   const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generatetoken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the User");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  const user = await User.findOne({ email });
  console.log(user);
  console.log(user.password == password);

  if (user && (await user.password == password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generatetoken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports={registerUser, authUser, allUsers}; 
