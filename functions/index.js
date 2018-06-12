(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//const functions = require('firebase-functions');
const admin = __webpack_require__(1);
const functions = __webpack_require__(2);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
//exports.helloWorld = functions.https.onRequest((request, response) => {
//    response.send("Hello from Firebase!");
//});
const serviceAccount = __webpack_require__(3);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ajax-a642a.firebaseio.com'
});
const crypto = __webpack_require__(4);
const qs = __webpack_require__(5);
const CORS = __webpack_require__(6);
const cors = CORS({ origin: true });
const redirect_uri = ' http://localhost:4200/redirect';
const client_id = "a3a85ea7eb3d3f26a568f0ffacca2464a5c736a601721f7a07c963d71e67f168";
const client_secret = "b8dea8d60fb57538d143d2eb86623f06aec8c55898d0e8264f2c6fb688cbe3fe";
const defaultParams = {
    client_id,
    client_secret,
    redirect_uri
};
exports.redirect = functions.https.onRequest((req, res) => {
    const base = 'https://www.coinbase.com/oauth/authorize?';
    const queryParams = Object.assign({}, defaultParams, { response_type: 'code', scope: 'wallet:accounts:read', state: crypto.randomBytes(20).toString('hex') });
    const endpoint = base + qs.stringify(queryParams);
    res.redirect(endpoint);
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("firebase-functions");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	"type": "service_account",
	"project_id": "ajax-a642a",
	"private_key_id": "8e9ed7e30b498abb18321f5fb65a8c5bd87d36ed",
	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvGtksNyOOhmIB\nGByYwHPJw0/Y8tnjN7vt5I7qUDrmnUB+atminHqNeL7dPASwPNS2Embx2+Rh0JPs\naKUtLpcs4yQDrROXY6XrpVzQUQ9o1bYRxTUDPFXGyDTqHGW43+iiarsl3vxVnao5\nEj4lzJmTGgRxJlaVL+EhFV3nVXZ4jgTW03IDhgpv9XvJyx2LKL6em053iIqk9C3e\nCDnONcbrrHWP3KkTshubFP3uNillj9WVzsXuHZkAeGamQ7FcbwH16sT06tpfJiaz\npnBKlGJW+dlmSjsMUDuw/PWq5GILZ8x2zAwxCb2lR7vCIpA1h3kFUwBZFKcRs9AP\n/tpNRXM7AgMBAAECggEAF4332cafCKyTYWH3ctAsozRGjkCjcQ5jFXix2tt+WN2d\nZS6wEPuV/BLahehtbwb3zCLZ6JNI+6QdnzxianCtKFNzru+TcOwYJS9CNsmOAO8C\nm2MDoxL015UV58ojIC/f231E/dlVk0TEDFejttz4vvzNzSoNlUBIEKBkWIU6twjr\nfaxUDO7hIVDLjzJlCJzmCu17DIzX5vog2Qg9oAu9d1zqOcgP+An1vouFL16arhF1\nmiWODfWoJTGResl5bHM69dudPha31ZWxtZvXGfGSGQW5n0zb1WJt780AZzxBRrI+\nlDmU/lDuf+6uYitj8oNMAf1TVyoXAeGtMq0v+cRrrQKBgQDyoCCKcI8RmqsHTSq7\nkO9u2ORPgUY1L/uSGpNSc9IYJivwnhN8p2oKg5qRtk7+R2N0opDooeFF0AIPktix\nHmnzhVPb1JmDkAYq8JSNN0VN+z+XVm+P/pI+M4PsncmWqrThTe5TgA2jVHQqAIiG\n7j6b2n1Hk37thW7kCF6Ta4rgPwKBgQC4weLrGXqLWgxPoxH3MT/Pzw9MYMzdN8au\neqY55ZcSM6Oyc7h7yZvnIDiJeSKB60nqb3qgeJdFYEckdzXud8wg8wsjyv+aMvMI\nYVME+/2eusutUz5oQfhgq3oGw8hEJ+EbNHoVXclOFMJyXW4Cnym9HWZOK9KEX8bS\n+oEB68xuBQKBgARPK8TJswDRCnCawkOKk3YYjBWNaj3PmFxD9JHmVLjxFJ61cAsq\nvgtpwvkLj+OcSPvtVz2KgoHG7AJyzT54F9GncJHa+M8JY9KnazwG20hDSiHZ+ylH\nkDlimNk/BDGU3pmR1MXO5G8eNOH6GHKtEJecDdWTnRGC6TFLpMJhipnpAoGBAKmu\n+FdvmQqu8yuY2wEqLC8RPj2pkb2CYmkQn+YApJTE9I0Klt6ptRO6lfI8XKLxk3tK\nU1daKaQ/3lbxXYjcYY/JZ+vBnqriLC8AI50qSi4j5LgVAfYC0LkIBBR+b0mZTrcL\npSxGbIHXsxYSFN03jL/xZmpY+Qk2ZYaTJzS6eZB5AoGBAKQiZxV4CCAj0RxKu67W\nPDkS5Z06eUpZCcZXHQ8FgvDKftWnai1D+55XvvHkMpWq6EZ9NWxEbQ/kfWCmjmbx\nJmQMZlRmIFjTOfYdYDfK9NQrtTggF6MYTThAaIWCy/qcrTdbSkPEZkgXWPAMdkYb\n5CJpNlhJePhc92gOwD+w3sgb\n-----END PRIVATE KEY-----\n",
	"client_email": "firebase-adminsdk-26ili@ajax-a642a.iam.gserviceaccount.com",
	"client_id": "116568306518106903719",
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://accounts.google.com/o/oauth2/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-26ili%40ajax-a642a.iam.gserviceaccount.com"
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ])));