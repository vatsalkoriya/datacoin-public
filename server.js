const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authroute");
const userRoutes = require("./routes/userroute");
const contactRoutes = require("./routes/contactroute");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware for CORS (Cross-Origin Resource Sharing)
// Allow common development origins and Vercel deployments
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://datacoinsoftwarepvtltd.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // Check if origin is allowed
    const isAllowed = !origin ||
      allowedOrigins.indexOf(origin) !== -1 ||
      origin.includes('localhost') ||
      origin.includes('127.0.0.1') ||
      origin.endsWith('.vercel.app');

    if (isAllowed) {
      callback(null, true);
    } else {
      console.log('Blocked by CORS:', origin);
      callback(new Error('CORS policy: origin not allowed'));
    }
  },
  credentials: true
}));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security and Performance Middleware
app.use(helmet({
  crossOriginResourcePolicy: false, // Allow cross-origin requests
}));
app.use(compression());

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