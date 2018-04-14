var http = require('http');
var log = console.log;
var express = require('express');
var router = express.Router();

var url = "http://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&limit=20&category=5562b415e4b00c57d9b94ac8";


router.get('/', function(req, res) {
	http.get(url, function(resquest) {
		var html = '';
		resquest.setEncoding('utf-8'); //防止中文乱码

		//监听data事件，每次取一块数据
		resquest.on('data', function(chunk) {
			html += chunk;
		});

		//监听end事件，如果整个网	页内容的html都获取完毕，就执行回调函数
		resquest.on('end', function() {
			html=JSON.parse(unescape(html.replace(/\\u/g, '%u')))
			res.status(200)
			res.json(html)
		})
	})
})

module.exports=router;