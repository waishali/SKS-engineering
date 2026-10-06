const Quote = require("../models/Quote");

const createQuote = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      service,
      message,
    } = req.body;

    if (!name || !email || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone and service are required",
      });
    }

    const quote = await Quote.create({
      name,
      email,
      phone,
      service,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Quote request submitted successfully",
      data: quote,
    });
  } catch (error) {
    console.error("Create Quote Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit quote request",
    });
  }
};

const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: quotes,
    });
  } catch (error) {
    console.error("Get Quotes Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch quotes",
    });
  }
};

module.exports = {
  createQuote,
  getQuotes,
};
