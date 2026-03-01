const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // Options to improve connection reliability in different networks
            family: 4, // Force IPv4 (often fixes ECONNREFUSED issues in Node/Windows)
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error connecting to MongoDB: ${error.message}`);
        console.error("👉 Tip: Check if your current IP address is whitelisted in MongoDB Atlas Network Access.");
        console.error("👉 If using a VPN or office network, try disconnecting it.");
        process.exit(1); 
    }
};

module.exports = connectDB;