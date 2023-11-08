// models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      text: String,
      options: [String],
    },
  ],
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
