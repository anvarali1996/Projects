import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { guestRoute, protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

// nodemail
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e229d9f1a40fff",
        pass: "dcadd231b8d366"
    }
});

router.get('/login', guestRoute, (req, res) => {
    res.render('login', { title: "Login Page", active: 'login' })
});

router.get('/register', guestRoute, (req, res) => {
    res.render('register', { title: "Regiter Page", active: "register" });
});

router.get('/forgot-password', guestRoute, (req, res) => {
    res.render('forgot-password', { title: "Forgot Password Page", active: "forgot" });
});

router.get('/reset-password/:token', guestRoute, async (req, res) => {
    const { token } = req.params;
    const user = await User.findOne({ token });
    if (!user) {
        req.flash('error', 'Link has been expired or invalid');
        return res.redirect('/forgot-password');
    }
    res.render('reset-password', { title: "Reset Password Page", active: "reset", token });
});

router.get('/profile', protectRoute, (req, res) => {
    res.render('profile', { title: "Profile page", active: "profile" });
});
router.post('/register', guestRoute, async (req, res) => {
    // console.log(req.body);
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            req.flash('error', 'User already exists with this email!');
            return res.redirect('/register');
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });
        user.save();
        req.flash('success', 'User has been registered succesfully, you can login now!');
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        req.flash('error', 'Something went wrong try again!');
        res.redirect('/register');
    }
})

router.post('/login', guestRoute, async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            req.session.user = user;
            res.redirect('/profile');
        } else {
            req.flash('error', 'Invalid email or password');
            res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        req.flash('error', 'Something went wrong try again!');
        res.redirect('/login');
    }
})

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
})

// handle forgot password
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            req.flash('error', 'User not found with this email');
            return res.redirect('/forgot-password');
        }
        const token = Math.random().toString(36).slice(2);
        user.token = token;
        await user.save();

        const info = await transport.sendMail({
            from: '"Anvarjon dev 👻" <info@anvarjon.eu>', // sender address
            to: email, // list of receivers
            subject: "Reset password ✔", // Subject line
            text: "Please reset your password!", // plain text body
            html: `<p>Click here to change your password: <a href='https://localhost:3000/reset-password/${token}'>Reset Passrod</a><br>Thanks</br></p>`, // html body
        });
        if (info.messageId) {
            req.flash('success', 'Reset password link has been send to your email');
            res.redirect('/forgot-password');
        } else {
            req.flash('error', 'Error sending email');
            res.redirect('/forgor-password');
        }
    } catch (error) {
        console.error(error);
        req.flash('error', 'Something went wrong try again!');
        res.redirect('/forgot-password');
    }
});

//reset password

router.post('/reset-password', async (req, res) => {
    const { token, new_password, confirm_new_password } = req.body;
    try {
        const user = await User.findOne({ token });
        if (new_password !== confirm_new_password) {
            req.flash("error", 'Password does not match!');
            return res.redirect(`/reset-password/${token}`);
        }
        if (!user) {
            req.flash('error', 'Invalid token');
            return res.redirect('/forgot-password');
        }
        user.password = await bcrypt.hash(new_password, 10);
        user.token = null;
        await user.save();

        req.flash('success', 'Password has been changed succesfully');
        res.redirect('/login');

    } catch (error) {
        console.error(error);
        req.flash('error', 'Something went wrong try again!');
        res.redirect('/reset-password');
    }
});

export default router;