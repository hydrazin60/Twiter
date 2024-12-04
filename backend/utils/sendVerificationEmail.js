import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Verify your email address",
    text: `Please click on the link to verify your email address: http://localhost:4000/api/v1/X_clone/jbn/auth/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully.");
  } catch (error) {
    console.error(`Error sending verification email: ${error.message}`);
    throw new Error("Failed to send verification email.");
  }
};
