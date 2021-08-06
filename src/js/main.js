"use strict";
// Importing modules
import {addHeader} from './modules/header.js';
import * as services from './modules/services.js';
import * as animations from './modules/animations.js';

// Adding Header scripts from module
addHeader();

window.addEventListener('load', async function () {
	await services.initServices();
	await animations.initAnimations('landing');
	document.getElementById('mapa').innerHTML = `<iframe width="100%" height="100%" frameborder="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=11.651489926122343,-70.18700598978333+(Software%20Solutions%20F.P.)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`
});