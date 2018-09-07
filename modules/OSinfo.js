var os = require('os');
var colors = require('colors');
var time = require('./time');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var convTime = time(uptime);
    var userInfo = os.userInfo();
    console.log('System:'.magenta, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.rainbow, cpu);
    console.log('Uptime: ~'.green, convTime);
    console.log('User name:'.cyan, userInfo.username);
    console.log('Home dir:'.america, userInfo.homedir);
}

exports.print = getOSinfo;

// eksportowanie więcej niz jednej części pliku :
// module.exports = {
//    print: getOSinfo,
//    ....
// }