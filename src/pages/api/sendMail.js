import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_EMAIL_ID,
        pass: process.env.GMAIL_PASSWORD,
    },
});

export default function handler(req, res) {
    // send email to the user
    // console.log(req.body);
    const { fullName,
        email,
        countryCode,
        phoneNumber,
        companyName,
        productDetails,
        otherProducts,
        quantity } = req.body;
    console.log(req.body);
    try {
        const mailOptions = {
            from: process.env.GMAIL_EMAIL_ID,
            to: process.env.GMAIL_EMAIL_ID,
            subject: `Inquiry from ${fullName} from ${companyName}`,
            html: `<b>Full Name</b>: ${fullName}<br><b>Email</b>: ${email}<br><b>Phone Number</b>:+${countryCode} ${phoneNumber}<br><b>Company Name</b>: ${companyName}<br><b>Product Name</b>: ${(productDetails == "Others" ? otherProducts : productDetails)}<br><b>Quantity</b>: ${quantity}`,
        };


        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
                res.json({ success: true });
            }
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, error: error.message });
    }

}