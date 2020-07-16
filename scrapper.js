var casper = require('casper').create();
casper.start('https://meu.inss.gov.br/central/#/aberto/autenticidade');

casper.then(function () {
  var body = document.querySelector('#root');
  //this.echo('First Page: ' + document.querySelectorAll('#root'));
  console.log(body);
  // for (let li of body) {
  //   console.log(li);
  // }
});

casper.run();
