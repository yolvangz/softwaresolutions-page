"use strict";
// Local URL Request
export {requestServicesInfo as getServices};
// Server Request
// Return the JSON services info as a JS Object
async function requestServicesInfo(){
	const requestURL = `http://${window.location.hostname}${window.location.pathname}data/services.json`;
	let Request = new Promise(function (myResolve) {
		const request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'json';
		request.onload = () => {
			try{
				myResolve(request.response);
			}catch (error){
				console.error(`${error.name}: ${error.message}`);
			}
		}
		request.send();
	});
	return await Request;
}