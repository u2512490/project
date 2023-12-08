const jwt = require("jsonwebtoken");

const generatetoken = (id) => {
    return jwt.sign({id:id}, process.env.JWT_SECRET, {
        expiresIn:"180d"
    });
}

module.exports = generatetoken;