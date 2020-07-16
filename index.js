var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

// var casper = require('casper').create();
// var links;

// function getLinks() {
//   // Scrape the links from top-right nav of the website
//   var links = document.querySelectorAll('ul.navigation li a');
//   return Array.prototype.map.call(links, function (e) {
//     return e.getAttribute('href');
//   });
// }

// // Opens casperjs homepage
// casper.start('http://casperjs.org/');

// casper.then(function () {
//   links = this.evaluate(getLinks);
// });

// casper.run(function () {
//   for (var i in links) {
//     console.log(links[i]);
//   }
//   casper.done();
// });

app.get('/casper', function (req, res) {
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
});

app.get('/scrape', function (req, res) {
  const url = 'https://meu.inss.gov.br/central/#/aberto/autenticidade';

  var options = {
    url: url,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4',
    },
  };

  request(options, function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);
      console.log(html);

      //   var title, release, rating;
      //   var json = { title: '', release: '', rating: '' };

      //   $('.header').filter(function () {
      //     var data = $(this);
      //     title = data.children().first().text();

      //     release = data.children().last().children().text();

      //     json.title = title;
      //     json.release = release;
      //   });

      // Since the rating is in a different section of the DOM, we'll have to write a new jQuery filter to extract this information.

      //   $('.star-box-giga-star').filter(function () {
      //     var data = $(this);

      //     // The .star-box-giga-star class was exactly where we wanted it to be.
      //     // To get the rating, we can simply just get the .text(), no need to traverse the DOM any further

      //     rating = data.text();

      //     json.rating = rating;
      //   });
    }
  });
});

app.listen('3333');
console.log('Magic happens on port 3333');
exports = module.exports = app;
