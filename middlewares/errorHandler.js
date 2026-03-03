const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error); // Pass the error to the next middleware (our errorHandler)
};

// General error handling middleware
// This middleware catches any error that occurs in the application
const errorHandler = (err, req, res, next) => {
    // If the status code is still 200, it means an error occurred but the status wasn't set.
    // In that case, set it to 500 (Internal Server Error).
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);

    // Send a JSON response with the error message
    res.json({
        message: err.message,
        // Include the stack trace only if the server is in 'development' mode for debugging
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = { notFound, errorHandler };