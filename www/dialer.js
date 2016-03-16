var exec = require('cordova/exec');

var PhoneDialer = {
    dial: function(phnum, error) {
        exec(null, function(err) {error(err);}, "PhoneDialer", "dial", [phnum]);
    }
}
module.exports = PhoneDialer;