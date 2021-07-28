import express from "express";
//Import the schema from models
import SignupMessage from "../models/signup.models.js";

// Password encryption
import bcrypt from 'bcrypt';


//need express router
const router = express.Router();

router.post("/signup", async (req, response) => {
  
  //creating a secure password using bycrpt
  const saltPassword = await bcrypt.genSalt(10)
  const securePassword = await bcrypt.hash(req.body.password, saltPassword)
  
  const signedUpUser = new SignupMessage({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: securePassword
  });

  signedUpUser
    .save()
    .then((data) => response.json(data))
    .catch((error) => response.json(error));
});

export default router;
