// Local URL Request
export const requestURL = "http://localhost:3000/data/services.json";
// Server Request
// const requestURL = "http://softwaresolutions.com.ve/data/services.json";
export function requestServicesInfo(){
	const request = new XMLHttpRequest();

	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	request.onload = function(){window.services = request.response};
}