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

        // Provide clearer, actionable guidance for the common SRV/DNS error (querySrv ECONNREFUSED)
        if (error.message && error.message.includes('querySrv')) {
            console.error('👉 Cause: DNS SRV lookup failed (querySrv).');
            console.error('👉 Quick fixes:');
            console.error('   - Ensure your current IP is whitelisted in MongoDB Atlas Network Access.');
            console.error('   - If you are on a VPN or corporate network, try disconnecting it.');
            console.error('   - Use Atlas "Standard connection string" (non-SRV) and put it in your .env as MONGO_URI.');
            console.error('     Example template (replace <user>,<password>,<hosts>,<dbname>):');
            console.error('     mongodb://<user>:<password>@cluster0-shard-00-00.<host>:27017,cluster0-shard-00-01.<host>:27017,cluster0-shard-00-02.<host>:27017/<dbname>?ssl=true&replicaSet=<replicaSetName>&authSource=admin&retryWrites=true&w=majority');
        } else {
            console.error('👉 Tip: Check if your current IP address is whitelisted in MongoDB Atlas Network Access.');
            console.error('👉 If using a VPN or office network, try disconnecting it.');
        }

        // Exit with non-zero so process managers know startup failed
        process.exit(1);
    }
};

module.exports = connectDB;