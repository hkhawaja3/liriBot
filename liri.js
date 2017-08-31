
var Twitter = require('twitter');


var command = process.argv[2];
var thing = process.argv[3];


var params = {
	screen_name: 'hkhawaja3',
	count: 20
};

var keys = require('./keys');

var client = new Twitter(keys.twitterKeys);
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
	id: '9326288284ef417e96b0222935c7f6b8'
	secret: '288134697297430bad1b7a38c940a1d2'
});

var request = require('request');

var fs = require("fs");

