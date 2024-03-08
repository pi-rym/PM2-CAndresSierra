/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/handler.js":
/*!****************************!*\
  !*** ./scripts/handler.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderMovie = __webpack_require__(/*! ./renderMovie */ \"./scripts/renderMovie.js\");\r\n\r\nconst result = () => {\r\n    $.get('https://students-api.2.us-1.fl0.io/movies', (data) => {\r\n        data.forEach(renderMovie);\r\n      })\r\n}\r\n\r\n\r\nmodule.exports = result\n\n//# sourceURL=webpack://front/./scripts/handler.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const result = __webpack_require__(/*! ./handler */ \"./scripts/handler.js\");\r\n\r\nresult()\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderMovie.js":
/*!********************************!*\
  !*** ./scripts/renderMovie.js ***!
  \********************************/
/***/ ((module) => {

eval("\r\nfunction renderMovie(item){\r\n\r\n    const target = document.createElement('div');\r\n    target.classList.add('target');\r\n  \r\n  \r\n    target.innerHTML = `\r\n    <img src=\"${item.poster}\" alt=\"${item.title}\">\r\n    <div class=\"content\">  \r\n    <a href=\"\">${item.title}</a>\r\n    <p class=\"año\">${item.year}</p>\r\n    <p class=\"director\">${item.director}</p>\r\n    <p class=\"genero\">${item.genre.join(', ')}</p>\r\n    <h6><span>IMDB</span><i class=\"bi bi-star-fill\"></i>${item.rate}</h6>\r\n    </div>`\r\n    \r\n    const containerCards = document.getElementById('container-cards')\r\n    containerCards.appendChild(target);\r\n} \r\n\r\nmodule.exports = renderMovie\r\n\n\n//# sourceURL=webpack://front/./scripts/renderMovie.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;