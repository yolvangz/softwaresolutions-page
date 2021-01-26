// Local URL Request
export const requestURL = 'http://' + window.location.hostname + window.location.pathname + '/data/services.json';
// Server Request
// const requestURL = "http://softwaresolutions.com.ve/data/services.json";
export function requestServicesInfo(){
	const request = new XMLHttpRequest();

	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	request.onload = function(){window.services = request.response};
}