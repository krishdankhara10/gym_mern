const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Demo, Form, Contact, Field } = require('./models');
const router = express.Router();

const SECRET_KEY = "D_Krish";

router.get('/users', async (req, res) => {
  try {
    const users = await User.find().exec();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting user' });
  }    
});

router.post('/insert', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    res.json({ token, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    res.json({ token, message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error logging in' });
  }
});


router.get('/demos', async (req, res) => {
  try {
    const demos = await Demo.find().exec();
    res.json(demos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching demos' });
  }
});

router.post('/demos', async (req, res) => {
  try {
    const demo = new Demo(req.body);
    await demo.save();
    res.json(demo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating demo' });
  }
});

router.delete('/demos/:id', async (req, res) => {
  try {
    const demo = await Demo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Demo Detail deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting user' });
  }
});


router.get('/forms', async (req, res) => {
  try {
    const forms = await Form.find().exec();
    res.json(forms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching forms' });
  }
});

router.post('/forms', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.json(form);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating form' });
  }
});

router.delete('/forms/:id', async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    res.json({ message: 'forms details deleted successfully' });
  } catch (err) { 
    console.error(err);
    res.status(500).json({ message: 'Error deleting user' });
  }
});

router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().exec();
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

router.post('/contacts', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating contact' });
  }
});

router.delete('/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'contacts details deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting user' });
  }
});

router.get('/fields', async (req, res) => {
  try {
    const fields = await Field.find().exec();
    res.json(fields);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching fields' });
  }
});

router.post('/fields', async (req, res) => {
  try {
    const field = new Field(req.body);
    await field.save();
    res.json(field);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating field' });
  }
});

module.exports = router;