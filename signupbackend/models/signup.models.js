import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SignUpTemplate = new Schema ({
  firstname: 'String',
  lastname: 'String',
  username: 'String',
  email: 'String',
  password: 'String'
}, {timestamps: true});

const SignupMessage = mongoose.model('SignupMessage', SignUpTemplate);

export default SignupMessage;
