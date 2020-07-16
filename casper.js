var casper = require('casper').create();
var links;

function getLinks() {
  // Scrape the links from top-right nav of the website
  var links = document.querySelectorAll('#root');
  return links;
  // return Array.prototype.map.call(links, function (e) {
  //   return e.getAttribute('href');
  // });
}

// Opens casperjs homepage
casper.start('https://meu.inss.gov.br/central/#/aberto/autenticidade');

casper.then(function () {
  links = this.evaluate(getLinks);
  //console.log(links);
  JSON.stringify(links);
});

casper.run();
