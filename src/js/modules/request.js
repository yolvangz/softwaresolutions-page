"use strict";
// Local URL Request
export {getRequest};
// Server Request
// Return the JSON services info as a JS Object
async function getRequest(url = ''){
	try {
		const response = await fetch(url, {
			method: 'GET',
			mode: 'cors',
			credentials: 'omit'
		});
		return await response.json();
	} catch (error) {
		console.error(`${error.name}: ${error.message}`);
	}
}