const jwt = require('jsonwebtoken')
const secret = process.env.secret;
function adminSetUser(user) {
    const payload = {
        username:user.username,
        password:user.password
    }
    return jwt.sign(payload,secret);
}
module.exports = adminSetUser;