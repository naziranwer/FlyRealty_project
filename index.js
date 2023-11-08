const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path")

// Create an Express application
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));


// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/formDB', 
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }
)
  .then(()=>{
    console.log("DB is connected")
  })
  .catch((err)=>{
    console.log(err);
    console.log("DB is not connected.................!!!!!")
  })

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// Define routes
// const formRoutes = require('./routes/formRoutes'); // Assuming you have a 'formRoutes.js' file

// Mount routes
const formRoutes = require("./routes/route")
app.use('/', formRoutes); // Use '/api' as the base path for your form-related routes

// Serve the index page (assuming it's in the same directory as index.js)
app.use(express.static(__dirname));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
