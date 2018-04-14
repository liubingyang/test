window.log=console.log;

window.searchFunction = function(val) {
	window.searchInfo = val
};
window.creatScript=function(url) {
	return new Promise((resolve, reject) => {
		let script = document.createElement('script');
		script.id = 'removeScript';
		script.src = url;
		document.body.appendChild(script);
		script.onload = function() {
			resolve(window.searchInfo);
			document.body.removeChild(document.getElementById('removeScript'));

		}
	});	
};