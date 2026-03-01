const adminMiddleware = (req,res,next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    }
    else{
        res.status(403).json({message : "acces denied only limited to admin"})
    }
}
module.exports = adminMiddleware;