import express from "express";
import Contact from "../models/contactModal.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  // console.log("Received data:", { name, email, message }); // Log the incoming data

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please fill out all fields" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({
      message: "Message sent successfully. We will get back to you shortly",
    });
  } catch (error) {
    console.error("Error saving contact:", error.message); // Log the error
    res.status(500).json({ message: "Server error, try again later." });
  }
});

export default router;
