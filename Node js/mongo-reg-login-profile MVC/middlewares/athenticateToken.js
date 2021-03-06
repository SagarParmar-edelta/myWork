const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
            if (error) return res.sendStatus(401);
            req.email = decode;
            next();
        });
    } catch (error) {
        res.send(error.message);
    }
};
module.exports = authenticateToken;
