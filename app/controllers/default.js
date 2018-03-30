var express = require('express'),
	http    = require('http'),
	router  = express.Router();

router.get('/', function (req, res, next) {
	res.setHeader('Content-Type', 'application/json');

	var datas = '',
		req   = http.request({
		host  : 'apirest0',
		port  : 8001,
		path  : '/add',
		method: 'GET',
	}, function (response) {
		response.setEncoding('utf8');

		response.on('data', (chunk) => {
			datas = datas + chunk;
		});
		response.on('end', () => {
			datas = JSON.parse(datas);
			res.send(JSON.stringify(datas));
		});
	});
	req.on('error', (e) => {
		console.log(`problem with request: ${e.message}`);
	});

	req.end();
});

module.exports = router;
