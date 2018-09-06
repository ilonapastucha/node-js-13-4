var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
  // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    switch (instruction) {
        case '/exit':
          process.stdout.write('Quitting app!\n');
          break;

        case '/getOSinfo':
          console.log(process.versions);
          console.log('language: ' + process.env.lang);
          OSinfo.print();
          process.exit();
          break;

        default:
          process.stderr.write('Wrong instruction!');
    }
  }
});