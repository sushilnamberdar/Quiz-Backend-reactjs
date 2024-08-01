const mongoose = require('mongoose');
const Admin = require("../Models/AdminSchema");
const adminSetUser = require('../Service/auth');

const adminLogin = async (req, res) => {
    const { username, password } = req.body;
    console.log("Request body:", req.body);

    try {
        // Find user by username
        const admin = await Admin.findOne({ username });
        console.log("Admin found:", admin); // Debugging line to check if admin is found

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // Compare password
        if (admin.password !== password) {
            return res.status(404).json({ message: "Invalid Credentials" });
        }

       
        const token = adminSetUser(req.body);
        res.status(200).json({ message: 'Login successful' ,token:token});
    } catch (err) {
        console.error("Server error:", err); // Debugging line to log any server errors
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = adminLogin;