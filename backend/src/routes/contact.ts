import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import validator from "validator";
import Mail from "../models/mail";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// Define route for sending email and saving to database
router.post("/send", async (req: Request, res: Response) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.json({ status: 400, message: "Missing email or message" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ status: 400, message: "Invalid email format" });
    }

    // Save email and message to the database
    const newMail = new Mail({ email, message });
    await newMail.save();
    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: process.env.GMAIL_ADDRESS,
      subject: process.env.EMAIL_SUBJECT,
      html: `<p>A new message has been sent from ${email}:</p>
                   <p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ status: 200, message: "Your message has been sent!" });
  } catch (error) {
    console.error("Error sending email and saving to database:", error);
    res.json({ status: 500, message: "Internal server error" });
  }
});

export default router;
