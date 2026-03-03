const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authroute");
const userRoutes = require("./routes/userroute");
const contactRoutes = require("./routes/contactroute");
// Correctly import BOTH notFound and errorHandler
const { notFound, errorHandler } = require("./middlewares/errorHandler"); // <-- 1. FIX THIS IMPORT

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware for CORS (Cross-Origin Resource Sharing)
// allow requests from whichever frontend is hosting the UI
// CLIENT_URL may contain a single origin or a comma-separated list
// e.g. "http://localhost:3000,https://tubular-begonia-3a766f.netlify.app"
const clientUrls = (process.env.CLIENT_URL || '')
  .split(',')
  .map((u) => u.trim())
  .filter(Boolean);

const allowedOrigins = [
  ...clientUrls,
  'https://datacoinsoftwarepvtltd.onrender.com', // backend itself (not really needed)
];

app.use(cors({
  origin: (origin, callback) => {
    // Fix: Normalize origin by removing trailing slash if present
    const normalizedOrigin = origin ? origin.replace(/\/$/, '') : origin;

    // Check if origin is localhost or 127.0.0.1 (any port) or a Vercel deployment
    const isLocal = normalizedOrigin && (
      normalizedOrigin.startsWith('http://localhost') ||
      normalizedOrigin.startsWith('http://127.0.0.1') ||
      normalizedOrigin.endsWith('.vercel.app')
    );

    // allow non-browser requests (e.g. Postman) when origin is undefined
    if (!normalizedOrigin || isLocal || allowedOrigins.includes(normalizedOrigin)) {
      return callback(null, true);
    }
    console.error(`CORS blocked for origin: ${origin}`);
    callback(new Error('CORS policy: origin not allowed'));
  },
  credentials: true,
}));

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API Routes ---
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Mount the authentication and user routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);

// --- Error Handling Middleware ---
// This must be placed AFTER your API routes
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});