// Dependencies
var auth = require('basic-auth');
var checkCredentials = require('tsscmp');

const middlewares = {
    isAuthenticated: function (req, res, next) {
        var credentials = auth(req)
        // Check credentials
        // The "check" function will typically be against your user store
        if (!credentials || !check(credentials.name, credentials.pass)) {
            return res.status(401).send('HTTP Request Unauthorized!');
        } else {
            next();
        }
    },
};
// Basic function to validate credentials for example
function check(name, pass) {
    var valid = true
    // Simple method to prevent short-circut and use timing-safe compare
    valid = checkCredentials(name, process.env.SERVER_USER || '0CMl7qeNIu') && valid // Delete in Production
    valid = checkCredentials(pass, process.env.SERVER_PASS || 'mN%r#qLc0oxR') && valid // Delete in Production
    return valid;
}
module.exports = middlewares;
