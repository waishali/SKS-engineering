const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required"
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    res.status(201).json({
      success: true,
      message: "Contact message submitted successfully",
      data: contact
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to submit contact message"
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts"
    });
  }
};

module.exports = {
  createContact,
  getContacts
};
