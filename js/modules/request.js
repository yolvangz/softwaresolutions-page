"use strict";
// Local URL Request
export {requestServicesInfo as getServices};
// Server Request
// Return the JSON services info as a JS Object
async function requestServicesInfo(){
	const requestURL = 'http://' + window.location.hostname + window.location.pathname + '/data/services.json';
	let Request = new Promise(function (myResolve, myReject) {
		const request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'json';
		request.onload = () => {
			if (request.status == 200) {
				myResolve(request.response);
			} else {
				myResolve(null);
			}
		}
		request.send();
	});
	return await Request;
}