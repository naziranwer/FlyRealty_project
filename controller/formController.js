// controllers/formController.js
const Form = require('../model/Form');

// Create a new form
exports.getForm =(req,res)=>{
    res.render("form")
}
exports.createForm = async (req, res) => {
  const { title, questions } = req.body;

  try {
    const newForm = new Form({ title, questions });
    const savedForm = await newForm.save();
    res.redirect("/getform");
  } catch (error) {
    res.status(500).json({ error: 'Form creation failed' });
  }
};

// Retrieve a form by its ID
exports.getFormById = async (req, res) => {
  const { formId } = req.params;

  try {
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: 'Form retrieval failed' });
  }
};

// Submit a form
exports.submitForm = async (req, res) => {
  const { formId, responses } = req.body;

  try {
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    
    // Store the responses in a submissions collection
    // You'll need to create a Submissions model for this purpose
    // and save the responses to it.

    res.json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Form submission failed' });
  }
};
