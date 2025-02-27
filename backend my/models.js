const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  comment: String 
});

const Contact = mongoose.model('Contact', contactSchema);


const demoSchema = new mongoose.Schema({
  name: String,
  mobileno: String,
  email: String,
  course: String,
  city: String
});

const Demo = mongoose.model('Demo', demoSchema);


const fieldSchema = new mongoose.Schema({
  label: String,
  type: String
});

const Field = mongoose.model('Field', fieldSchema);

const formSchema = new mongoose.Schema({
  department: String,
  name: String,
  mobilno: String,
  email: String,
  state: String,
  city: String,
  gym: String,
  comment: String
});

const Form = mongoose.model('Form', formSchema);


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = {
  Contact,
  Demo,
  User,
  Form,
  Field
}

