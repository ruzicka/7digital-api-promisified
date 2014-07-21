'use strict';

var expect = require('chai').expect;

describe('config', function() {
	var config = require('../config');

	it('should have the default consumer key', function() {
		expect(config.consumerkey).to.equal('YOUR_KEY_HERE');
	});

	it('should have an empty oauthsecret', function() {
		expect(config.consumersecret).to.equal('YOUR_SECRET_HERE');
	});

	it('should have the response format set to JSON by default', function() {
		expect(config.format).to.equal('json');
	});
});