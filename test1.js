var html = require('./html.js');
var cheerio = require('cheerio');

var $ = cheerio.load(html);

var titles = $('ul.m-cvrlst.f-cb li a.msk');
var hrefs = $('ul.m-cvrlst.f-cb li a.msk');
var plays = $('ul.m-cvrlst.f-cb li span.nb');
var names = $('ul.m-cvrlst.f-cb li p a.nm');
titles.each(e=>{
	console.log($(titles[e]).attr('title'))
	console.log($(hrefs[e]).attr('href'))
	console.log($(plays[e]).text())
	console.log($(names[e]).attr('title'))
})
					
