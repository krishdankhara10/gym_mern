const express = require('express');
const cors = require('cors'); 
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://krishdankhara43:krishdankhara@krishclustor.mo0j2xe.mongodb.net/gymDataConnect', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to Database server......'));

// Set up Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/api', routes);

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server Started On : http://localhost:${port}`);
}); 


