/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address inconsistent styling of `abbr[title]`.\n * 1. Correct styling in Firefox 39 and Opera 12.\n * 2. Correct missing styling in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Address inconsistent styling of b and strong.\n * 1. Correct duplicate application of `bolder` in Safari 6.0.2.\n * 2. Correct style set to `bold` in Edge 12+, Safari 6.2+, and Chrome 18+.\n */\nb,\nstrong {\n  font-weight: inherit;\n  /* 1 */ }\n\nb,\nstrong {\n  font-weight: bolder;\n  /* 2 */ }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address inconsistent styling of `hr`.\n * 1. Correct `box-sizing` set to `border-box` in Firefox.\n * 2. Correct `overflow` set to `hidden` in IE 8/9/10/11 and Edge 12.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * 1. Correct inheritance and scaling of font-size for preformatted text.\n * 2. Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct font properties not being inherited.\n * 2. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Restore focus style in Firefox 4+ (unset by a rule above)\n */\nbutton:-moz-focusring,\ninput:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * Address `appearance` set to `searchfield` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Restore font weight (unset by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n* {\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  box-sizing: border-box; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  text-decoration: none; }\n  a:hover, a:focus {\n    text-decoration: none; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nbody {\n  background-color: #fff1e6; }\n\n.scene {\n  height: 100vh;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.level {\n  position: relative;\n  width: 300px;\n  height: 200px;\n  outline: 2px solid #fa803f; }\n\n.level__food {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: red; }\n\n.snake__part {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border-radius: 4px; }\n  .snake__part--head {\n    background-color: orange; }\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _level = __webpack_require__(6);
	
	// const setupModule = (() => {
	//   const snakePartSize = 10;
	//   const levelWidth = 300;
	//   const levelHeight = 200;
	// })();
	
	var changeTitleModule = function () {
	  var currentTitle = document.title;
	
	  var event = function event() {
	    /* little funnies */
	    window.addEventListener('blur', function () {
	      return document.title = 'We miss you...';
	    });
	    window.addEventListener('focus', function () {
	      return document.title = currentTitle;
	    });
	  };
	
	  var init = function init() {
	    event();
	  };
	
	  return {
	    init: init
	  };
	}();
	
	changeTitleModule.init();
	_level.test.initNewLevel();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This class control level element
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.test = undefined;
	
	var _snake = __webpack_require__(7);
	
	var _food = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Level = function () {
	  function Level(element) {
	    _classCallCheck(this, Level);
	
	    this.element = element;
	  }
	
	  _createClass(Level, [{
	    key: 'initNewLevel',
	    value: function initNewLevel() {
	      var snake = new _snake.Snake(this.element);
	      var food = new _food.Food(this.element);
	      snake.initNewSnake();
	      food.initNewFood();
	    }
	  }, {
	    key: 'getLevel',
	    value: function getLevel() {
	      return this.element;
	    }
	  }, {
	    key: 'getLevelCoordinates',
	    value: function getLevelCoordinates() {
	      return this.element.getBoundingClientRect();
	    }
	  }, {
	    key: 'getLevelWidth',
	    value: function getLevelWidth() {
	      var levelWidth = this.getLevelCoordinates().right - this.getLevelCoordinates().left;
	      return levelWidth;
	    }
	  }, {
	    key: 'getLevelHeight',
	    value: function getLevelHeight() {
	      var levelHeight = this.getLevelCoordinates().bottom - this.getLevelCoordinates().top;
	      return levelHeight;
	    }
	  }, {
	    key: 'createRandomNumbers',
	    value: function createRandomNumbers(min, max) {
	      var number = Math.random() * (max - min);
	      number = number - number % 10;
	
	      return number;
	    }
	  }, {
	    key: 'levelRegion',
	    value: function levelRegion() {
	      var width = this.getLevelCoordinates().right - this.getLevelCoordinates().left;
	      var height = this.getLevelCoordinates().bottom - this.getLevelCoordinates().top;
	
	      return {
	        width: width,
	        height: height
	      };
	    }
	
	    /**
	     * Returns a random number between min (inclusive) and max (exclusive)
	     */
	    // generateSnakePosition() {
	    //   const min = 0;
	    //   const maxWidth = this.getLevelWidth();
	    //   const maxHeight = this.getLevelHeight();
	    //   const randomTop = this.createRandomNumbers(min, maxHeight);
	    //   const randomLeft = this.createRandomNumbers(min, maxWidth);
	
	    //   return {
	    //     randomTop,
	    //     randomLeft,
	    //   };
	    // }
	
	  }]);
	
	  return Level;
	}();
	
	var test = exports.test = new Level(document.querySelector('.level'));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This class control snake element
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Snake = undefined;
	
	var _food = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KEY_W = 87;
	var KEY_S = 83;
	var KEY_A = 65;
	var KEY_D = 68;
	
	var food = new _food.Food();
	
	var Snake = exports.Snake = function () {
	  function Snake(level) {
	    _classCallCheck(this, Snake);
	
	    this.level = level;
	  }
	
	  _createClass(Snake, [{
	    key: 'initNewSnake',
	    value: function initNewSnake() {
	      // create new div with some attr
	      var snakeElement = document.createElement('div');
	      snakeElement.className = 'snake__part snake__part--head';
	      snakeElement.style.top = '40px';
	      snakeElement.style.left = '40px';
	
	      // append to level my snake
	      this.level.appendChild(snakeElement);
	
	      // create reference on current snake element
	      this.element = snakeElement;
	
	      // init remaining snake body parts
	      this.initSnakeBody(7);
	
	      // init controll
	      this.setupControll();
	    }
	  }, {
	    key: 'initSnakeBody',
	    value: function initSnakeBody(partCount) {
	      var i = partCount;
	      var headYCoord = parseInt(this.element.style.top, 10);
	      var headXCoord = parseInt(this.element.style.left, 10);
	      while (i > 0) {
	        var newHeadXCoord = headXCoord - i * 10;
	        this.addNewSnakePart(newHeadXCoord + 'px', headYCoord + 'px', this.element);
	
	        i--;
	      }
	    }
	
	    /**
	     * Universal function that add new part to snake body
	     */
	
	  }, {
	    key: 'addNewSnakePart',
	    value: function addNewSnakePart(coordX, coordY, element) {
	      var snakePart = document.createElement('div');
	      snakePart.className = 'snake__part';
	      snakePart.style.top = coordY;
	      snakePart.style.left = coordX;
	      // console.log(coordX + ' ' + coordY)
	      // this.element.parentNode.firstChild
	      this.element.parentNode.insertBefore(snakePart, element);
	    }
	
	    /**
	     * Set reference to snake tail
	     */
	
	  }, {
	    key: 'moveBody',
	
	
	    /**
	     * Function that controll moving all snake part
	     */
	    value: function moveBody(posX, posY) {
	      var snakeParts = document.querySelectorAll('.snake__part');
	      var arrayOfCoordinates = [];
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = Array.from(snakeParts)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var snake = _step.value;
	
	          arrayOfCoordinates.push([snake.style.left, snake.style.top]);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      arrayOfCoordinates.push([posX + 'px', posY + 'px']);
	      this.snakeTail = arrayOfCoordinates.shift();
	
	      // change the old coordinates to the new
	      for (var i = 0; i < snakeParts.length; i++) {
	        snakeParts[i].style.left = arrayOfCoordinates[i][0];
	        snakeParts[i].style.top = arrayOfCoordinates[i][1];
	      }
	
	      this.checkFood();
	    }
	
	    /**
	     * Function controll snake direction move
	     */
	
	  }, {
	    key: 'newMoveDirection',
	    value: function newMoveDirection() {
	      var moveDirection = this.moveDirection;
	      var snakeHead = document.querySelector('.snake__part--head');
	      var positionX = undefined;
	      var positionY = undefined;
	
	      switch (moveDirection) {
	        case 'top':
	          {
	            positionX = parseInt(snakeHead.style.left, 10);
	            positionY = parseInt(snakeHead.style.top, 10) - 10;
	            break;
	          }
	        case 'bottom':
	          {
	            positionX = parseInt(snakeHead.style.left, 10);
	            positionY = parseInt(snakeHead.style.top, 10) + 10;
	            break;
	          }
	        case 'left':
	          {
	            positionX = parseInt(snakeHead.style.left, 10) - 10;
	            positionY = parseInt(snakeHead.style.top, 10);
	            break;
	          }
	        case 'right':
	          {
	            positionX = parseInt(snakeHead.style.left, 10) + 10;
	            positionY = parseInt(snakeHead.style.top, 10);
	            break;
	          }
	        default:
	          {
	            console.warn('Something wrong');
	          }
	      }
	
	      this.moveBody(positionX, positionY);
	    }
	
	    // get current snake movement direction
	
	  }, {
	    key: 'restartInterval',
	
	
	    // clear current time interval and setup new
	    value: function restartInterval() {
	      var _this = this;
	
	      var time = 300;
	      var interval = this.intervalNumber;
	
	      if (interval) {
	        clearInterval(interval);
	      }
	
	      var newInterval = setInterval(function () {
	        _this.newMoveDirection();
	      }, time);
	
	      this.intervalNumber = newInterval;
	    }
	  }, {
	    key: 'contolsKeyboard',
	    value: function contolsKeyboard(event) {
	      var key = event.keyCode || event.which;
	      var currentDirection = this.moveDirection; // prevents movement of the snake through itself
	
	      if (key === KEY_A && currentDirection !== 'right') {
	        this.moveDirection = 'left';
	      } else if (key === KEY_D && currentDirection !== 'left') {
	        this.moveDirection = 'right';
	      } else if (key === KEY_W && currentDirection !== 'top') {
	        this.moveDirection = 'top';
	      } else if (key === KEY_S && currentDirection !== 'bottom') {
	        this.moveDirection = 'bottom';
	      }
	
	      this.restartInterval();
	    }
	
	    /**
	     * At every move check
	     * Where is food placed and where is now snake head
	     * If they match - add to snake new part and re arrange food
	     */
	
	  }, {
	    key: 'checkFood',
	    value: function checkFood() {
	      var headYCoord = parseInt(this.element.style.top, 10);
	      var headXCoord = parseInt(this.element.style.left, 10);
	
	      var foodYCoord = food.getCurrentFoodPosition().foodYCoord;
	      var foodXCoord = food.getCurrentFoodPosition().foodXCoord;
	      if (headYCoord === foodYCoord && headXCoord === foodXCoord) {
	        // using snake tail coordinates, that remove when snake make one move
	        this.addNewSnakePart(this.snakeTail[0], this.snakeTail[1], this.element.parentNode.firstChild);
	        food.setFoodNewPosition();
	      }
	      // if(head === food)
	    }
	  }, {
	    key: 'setupControll',
	    value: function setupControll() {
	      var _this2 = this;
	
	      window.addEventListener('keydown', function (event) {
	        _this2.contolsKeyboard(event);
	      });
	    }
	  }, {
	    key: 'element',
	    get: function get() {
	      return this.value;
	    },
	    set: function set(value) {
	      this.value = value;
	    }
	  }, {
	    key: 'snakeTail',
	    set: function set(tail) {
	      this.tail = tail;
	    }
	
	    /**
	     * Get reference to snake tail
	     */
	    ,
	    get: function get() {
	      return this.tail;
	    }
	  }, {
	    key: 'moveDirection',
	    get: function get() {
	      return this.direction;
	    }
	
	    // setup current snake movement direction
	    ,
	    set: function set(direction) {
	      this.direction = direction;
	    }
	  }, {
	    key: 'intervalNumber',
	    set: function set(interval) {
	      this.interval = interval;
	    },
	    get: function get() {
	      return this.interval;
	    }
	  }]);
	
	  return Snake;
	}();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This class control food element
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Food = undefined;
	
	var _level = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var foodElement = undefined;
	
	var Food = exports.Food = function () {
	  function Food(level) {
	    _classCallCheck(this, Food);
	
	    this.level = level;
	  }
	
	  _createClass(Food, [{
	    key: 'initNewFood',
	    value: function initNewFood() {
	      foodElement = document.createElement('div');
	      foodElement.className = 'level__food';
	      foodElement.style.top = '10px';
	      foodElement.style.left = '10px';
	      this.level.appendChild(foodElement);
	      this.setFoodNewPosition();
	
	      return foodElement;
	    }
	
	    /**
	     * Singleton func, return reference on element if it already created
	     */
	
	  }, {
	    key: 'getFood',
	    value: function getFood() {
	      if (!foodElement) {
	        foodElement = this.initNewFood();
	      }
	
	      return foodElement;
	    }
	
	    /**
	     * Setup new food position using Level func
	     */
	
	  }, {
	    key: 'setFoodNewPosition',
	    value: function setFoodNewPosition() {
	      var food = this.getFood();
	      var levelRegion = _level.test.levelRegion();
	
	      var foodXCoord = this.createRandomNumbers(0, levelRegion.width);
	      var foodYCoord = this.createRandomNumbers(0, levelRegion.height);
	
	      var snakePart = this.currentSnakePartCoordinates();
	
	      for (var i in snakePart) {
	        if (foodXCoord === snakePart[i][0]) {
	          foodXCoord = this.createRandomNumbers(0, levelRegion.width);
	        }
	
	        if (foodYCoord === snakePart[i][1]) {
	          foodYCoord = this.createRandomNumbers(0, levelRegion.height);
	        }
	      }
	
	      food.style.display = 'none';
	      food.style.top = foodYCoord;
	      food.style.left = foodXCoord;
	      food.style.display = 'block';
	    }
	  }, {
	    key: 'getCurrentFoodPosition',
	    value: function getCurrentFoodPosition() {
	      var food = this.getFood();
	
	      return {
	        foodYCoord: parseInt(food.style.top, 10),
	        foodXCoord: parseInt(food.style.left, 10)
	      };
	    }
	  }, {
	    key: 'currentSnakePartCoordinates',
	    value: function currentSnakePartCoordinates() {
	      var snakeParts = document.querySelectorAll('.snake__part');
	      var arrayOfCoordinates = [];
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = Array.from(snakeParts)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var snake = _step.value;
	
	          arrayOfCoordinates.push([snake.style.left, snake.style.top]);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return arrayOfCoordinates;
	    }
	  }, {
	    key: 'createRandomNumbers',
	    value: function createRandomNumbers(min, max) {
	      var number = Math.random() * (max - min);
	      number = number - number % 10;
	      return number + 'px';
	    }
	  }]);
	
	  return Food;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map