import mongoose from "mongoose";
import Contact from "./models/contactModal.js";

mongoose
  .connect("mongodb://localhost:27017/Portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      const testContact = new Contact({
        name: "Test User",
        email: "test@example.com",
        message: "This is a test message",
      });
      await testContact.save();
      console.log("Contact saved successfully");
    } catch (error) {
      console.error("Error saving contact:", error.message);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
