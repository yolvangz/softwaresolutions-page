// Importing modules
import {addHeader} from "./modules/header.js";
import * as request from "./modules/request.js";

// Adding Header scripts from module
addHeader();

window.addEventListener('load', function () {
	const services = window.services;
	delete window.services;
});