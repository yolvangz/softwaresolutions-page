// Importing modules
import {addHeader} from './modules/header.js';
import * as request from './modules/request.js';
import * as services from './modules/services.js';

// Adding Header scripts from module
addHeader();

window.addEventListener('load', function () {
	const servicesInfo = window.services;
	delete window.services;
	services.getAllAnchors();
});