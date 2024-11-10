const rateLimit=require('express-rate-limit');
const isProduction=process.env.NODE_ENV === 'production';

const apiLimit=rateLimit({
    windowMs: isProduction ? (15 * 60 * 1000) : (60 * 1000),
    max: isProduction ? 100 : 1000,
    message: 'Too many requests from this IP, please try again later'
})

module.exports=apiLimit