const jwt = require('jsonwebtoken');

const secr = process.env.secret;

const adauth = async (req, res, next) => {
    console.log('recevied rerquest to validate token ', req.headers);
    const atoken = req.headers.authorization;
    const token = req.headers['authorization'];

    try {
        const decode = jwt.verify(token, secr);

        console.log("decode",decode);
        next();
    } catch (erro){
        console.log('erro ao validar token', erro);
    };
    
}

module.exports = adauth;