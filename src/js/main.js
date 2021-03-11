"use strict";
// Importing modules
import {addHeader} from './modules/header.js';
import * as services from './modules/services.js';
import * as animations from './modules/animations.js';

// Adding Header scripts from module
addHeader();

window.addEventListener('load', function () {
	animations.initAnimations('landing');
	services.initServices();
});