const jwt = require('jsonwebtoken')
const secret = process.env.secret;
function adminSetUser(user) {
    const payload = {
        username:user.username,
        password:user.password
    }
    return jwt.sign(payload,secret);
}
function adminGetUser(token) {
if(!token) return null;
return jwt.verify(token,secret);



}
module.exports = adminSetUser,adminGetUser;