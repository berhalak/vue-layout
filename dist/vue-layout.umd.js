(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-layout"] = factory();
	else
		root["vue-layout"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f0":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".cen-component{display:flex;justify-content:center;align-items:center}.cen-component.cen-component--grow{flex-grow:1}.cen-component.cen-component--shrink{flex-shrink:1}.cen-component.cen-component--expand{flex-grow:9999}.cen-component.cen-component--full{height:100%}.cen-component.cen-component--zero{flex-basis:0px}.cen-component.cen-component--scroll{overflow:auto;flex-basis:0px}", ""]);


/***/ }),

/***/ "087e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cols_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e9ba");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cols_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cols_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cols_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0dd9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".wrap-component.wrap-component--grow{flex-grow:1}.wrap-component.wrap-component--shrink{flex-shrink:1}.wrap-component.wrap-component--expand{flex-grow:9999}.wrap-component.wrap-component--full{height:100%}.wrap-component.wrap-component--scroll{overflow:auto;flex-basis:0px}", ""]);


/***/ }),

/***/ "1cd6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0dd9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a8e9c708", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1f4d":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, "@media only screen and (min-width:0px){.max-component{max-width:100%}}@media only screen and (min-width:576px){.max-component{max-width:540px}}@media only screen and (min-width:768px){.max-component{max-width:720px}}@media only screen and (min-width:992px){.max-component{max-width:960px}}@media only screen and (min-width:1100px){.max-component{max-width:1068px}}@media only screen and (min-width:1224px){.max-component{max-width:1200px}}.max-component{margin:0 auto}.max-component.max-component--grow{flex-grow:1}.max-component.max-component--shrink{flex-shrink:1}.max-component.max-component--expand{flex-grow:9999}.max-component.max-component--zero{flex-basis:0px}.max-component.max-component--scroll{overflow:auto;flex-basis:0px}.max-component.max-component--full{height:100%}", ""]);


/***/ }),

/***/ "2342":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7fdb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "3f8d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("757b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("418453ca", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "41b7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1f4d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1ea123be", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4367":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".cols-component{display:grid;grid-auto-flow:column}@media only screen and (min-width:0px){.cols-component.cols-component--xs{grid-template-columns:var(--xs);grid-auto-flow:row}}@media only screen and (min-width:576px){.cols-component.cols-component--sm{grid-template-columns:var(--sm);grid-auto-flow:row}}@media only screen and (min-width:768px){.cols-component.cols-component--md{grid-template-columns:var(--md);grid-auto-flow:row}}@media only screen and (min-width:992px){.cols-component.cols-component--lg{grid-template-columns:var(--lg);grid-auto-flow:row}}@media only screen and (min-width:1100px){.cols-component.cols-component--xl{grid-template-columns:var(--xl);grid-auto-flow:row}}@media only screen and (min-width:1332px){.cols-component.cols-component--xxl{grid-template-columns:var(--xxl);grid-auto-flow:row}}@media only screen and (min-width:1632px){.cols-component.cols-component--rh{grid-template-columns:var(--rh);grid-auto-flow:row}}@media only screen and (min-width:1832px){.cols-component.cols-component--fh{grid-template-columns:var(--fh);grid-auto-flow:row}}@media only screen and (min-width:2232px){.cols-component.cols-component--qh{grid-template-columns:var(--qh);grid-auto-flow:row}}@media only screen and (min-width:3032px){.cols-component.cols-component--kh{grid-template-columns:var(--kh);grid-auto-flow:row}}.cols-component.cols-component--grow{flex-grow:1}.cols-component.cols-component--shrink{flex-shrink:1}.cols-component.cols-component--expand{flex-grow:9999}.cols-component.cols-component--full{height:100%}.cols-component.cols-component--zero{flex-basis:0px}.cols-component.cols-component--scroll{overflow:auto;flex-basis:0px}", ""]);


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "52f3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5d5a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("9d1bba44", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5d5a":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".box-component>*{height:100%}.box-component.box-component--grow{flex-grow:1}.box-component.box-component--shrink{flex-shrink:1}.box-component.box-component--expand{flex-grow:9999}.box-component.box-component--full{height:100%}.box-component.box-component--zero{flex-basis:0px}.box-component.box-component--scroll{overflow:auto;flex-basis:0px}", ""]);


/***/ }),

/***/ "612d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rows_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8dc3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rows_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rows_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rows_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6813":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Max_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("41b7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Max_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Max_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Max_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "757b":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, "#breakpoint{position:fixed;bottom:0;right:0;color:#000;font-size:12px;padding-right:2px;padding-bottom:2px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}@media only screen and (min-width:0px){#breakpoint:after{content:\"xs\"}}@media only screen and (min-width:576px){#breakpoint:after{content:\"sm\"}}@media only screen and (min-width:768px){#breakpoint:after{content:\"md\"}}@media only screen and (min-width:992px){#breakpoint:after{content:\"lg\"}}@media only screen and (min-width:1100px){#breakpoint:after{content:\"xl\"}}@media only screen and (min-width:1332px){#breakpoint:after{content:\"xxl\"}}@media only screen and (min-width:1632px){#breakpoint:after{content:\"rh\"}}@media only screen and (min-width:1832px){#breakpoint:after{content:\"fh\"}}@media only screen and (min-width:2232px){#breakpoint:after{content:\"qh\"}}@media only screen and (min-width:3032px){#breakpoint:after{content:\"kh\"}}", ""]);


/***/ }),

/***/ "7f48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f4f5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7fdb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bd41");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("e60a1318", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "810e":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".rows-component{display:grid}@media only screen and (min-width:0px){.rows-component.xs-component--xs{grid-template-rows:var(--xs);grid-auto-flow:column}}@media only screen and (min-width:576px){.rows-component.sm-component--sm{grid-template-rows:var(--sm);grid-auto-flow:column}}@media only screen and (min-width:768px){.rows-component.md-component--md{grid-template-rows:var(--md);grid-auto-flow:column}}@media only screen and (min-width:992px){.rows-component.lg-component--lg{grid-template-rows:var(--lg);grid-auto-flow:column}}@media only screen and (min-width:1100px){.rows-component.xl-component--xl{grid-template-rows:var(--xl);grid-auto-flow:column}}@media only screen and (min-width:1332px){.rows-component.xxl-component--xxl{grid-template-rows:var(--xxl);grid-auto-flow:column}}@media only screen and (min-width:1632px){.rows-component.rh-component--rh{grid-template-rows:var(--rh);grid-auto-flow:column}}@media only screen and (min-width:1832px){.rows-component.fh-component--fh{grid-template-rows:var(--fh);grid-auto-flow:column}}@media only screen and (min-width:2232px){.rows-component.qh-component--qh{grid-template-rows:var(--qh);grid-auto-flow:column}}@media only screen and (min-width:3032px){.rows-component.kh-component--kh{grid-template-rows:var(--kh);grid-auto-flow:column}}.rows-component.rows-component--grow{flex-grow:1}.rows-component.rows-component--shrink{flex-shrink:1}.rows-component.rows-component--expand{flex-grow:9999}.rows-component.rows-component--full{height:100%}.rows-component.rows-component--zero{flex-basis:0px}.rows-component.rows-component--scroll{overflow:auto;flex-basis:0px}", ""]);


/***/ }),

/***/ "8639":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".hor-component{display:flex;flex-direction:row;flex-wrap:wrap}.hor-component.hor-component--top{align-items:flex-start}.hor-component.hor-component--bottom{align-items:flex-end}.hor-component.hor-component--center{align-items:center}.hor-component.hor-component--left{justify-content:flex-start}.hor-component.hor-component--right{justify-content:flex-end}.hor-component.hor-component--middle{justify-content:center}.hor-component.hor-component--space{justify-content:space-between}.hor-component.hor-component--around{justify-content:space-around}.hor-component.hor-component--evenly{justify-content:space-evenly}.hor-component.hor-component--wrap{flex-wrap:wrap}.hor-component.hor-component--grow{flex-grow:1}.hor-component.hor-component--shrink{flex-shrink:1}.hor-component.hor-component--expand{flex-grow:9999}.hor-component.hor-component--full{height:100%}.hor-component.hor-component--zero{flex-basis:0px}.hor-component.hor-component--scroll{overflow:auto;flex-basis:0px}", ""]);


/***/ }),

/***/ "87ae":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8639");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("cd9d5a44", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8b1b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("52f3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8dc3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("810e");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a5286ecc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8eb0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breakpoint_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3f8d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breakpoint_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breakpoint_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breakpoint_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a522":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".ver-component{display:flex;flex-direction:column}.ver-component.ver-component--top{justify-content:flex-start}.ver-component.ver-component--bottom{justify-content:flex-end}.ver-component.ver-component--center{align-items:center}.ver-component.ver-component--left,.ver-component.ver-component--right{align-items:flex-start}.ver-component.ver-component--middle{justify-content:center}.ver-component.ver-component--space{justify-content:space-between}.ver-component.ver-component--around{justify-content:space-around}.ver-component.ver-component--evenly{justify-content:space-evenly}.ver-component.ver-component--wrap{flex-wrap:wrap}.ver-component.ver-component--grow{flex-grow:1}.ver-component.ver-component--shrink{flex-shrink:1}.ver-component.ver-component--expand{flex-grow:9999}.ver-component.ver-component--zero{flex-basis:0px}.ver-component.ver-component--scroll{overflow:auto;flex-basis:0px}.ver-component.ver-component--full{height:100%}", ""]);


/***/ }),

/***/ "b82d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a522");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1bcdc7de", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bd41":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".grid-component{display:grid}@media only screen and (min-width:0px){.grid-component.grid-component--xs{grid:var(--grid-component--xs)}}@media only screen and (min-width:576px){.grid-component.grid-component--sm{grid:var(--grid-component--sm)}}@media only screen and (min-width:768px){.grid-component.grid-component--md{grid:var(--grid-component--md)}}@media only screen and (min-width:992px){.grid-component.grid-component--lg{grid:var(--grid-component--lg)}}@media only screen and (min-width:1100px){.grid-component.grid-component--xl{grid:var(--grid-component--xl)}}@media only screen and (min-width:1332px){.grid-component.grid-component--xxl{grid:var(--grid-component--xxl)}}@media only screen and (min-width:1632px){.grid-component.grid-component--rh{grid:var(--grid-component--rh)}}@media only screen and (min-width:1832px){.grid-component.grid-component--fh{grid:var(--grid-component--fh)}}@media only screen and (min-width:2232px){.grid-component.grid-component--qh{grid:var(--grid-component--qh)}}@media only screen and (min-width:3032px){.grid-component.grid-component--kh{grid:var(--grid-component--kh)}}.grid-component.grid-component--grow{flex-grow:1}.grid-component.grid-component--shrink{flex-shrink:1}.grid-component.grid-component--expand{flex-grow:9999}.grid-component.grid-component--zero{flex-basis:0px}.grid-component.grid-component--scroll{overflow:auto;flex-basis:0px}.grid-component.grid-component--full{height:100%}", ""]);


/***/ }),

/***/ "e622":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1cd6");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e9ba":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4367");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("707018ce", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ed29":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("87ae");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ee23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ver_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b82d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ver_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ver_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ver_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f4f5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("01f0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("f7c03284", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (false) {}

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"502b32a5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Grid.vue?vue&type=template&id=4c5ead2b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-component",class:_vm.klass,style:(_vm.style),on:{"click":function($event){return _vm.$emit('click')}}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Grid.vue?vue&type=template&id=4c5ead2b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Grid.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const breakPoints = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"rh",
	"fh",
	"qh",
	"kh"
];

const props = ["xs", "sm", "md", "lg", "xl", "xxl", "rh", "fh", "qh", "kh"];

const boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const boxStyle = ["size", "width", "height", "span", "area"];

function createClass(vm, prefix, flags) {
	let s = {};

	for (let key of flags) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function createStyles(vm) {
	let s = {};

	if (vm.size !== undefined) {
		s["flex-basis"] = vm.size;
	}
	if (vm.width !== undefined) {
		s["width"] = vm.width;
	}
	if (vm.height !== undefined) {
		s["height"] = vm.height;
	}
	if (vm.span) {
		s["grid-column"] = "span " + vm.span;
	}
	if (vm.area) {
		s["grid-area"] = vm.area;
	}
	return s;
}

function isRawSyntax(value) {
	if (!value) return true;
	return value.includes("'") || value.includes('"');
}

/* harmony default export */ var Gridvue_type_script_lang_js_ = ({
	props: ["gap", ...props, ...boxClass, ...boxStyle],
	computed: {
		style() {
			let res = createStyles(this);

			for (const size of breakPoints) {
				if (this[size]) {
					let value = this[size];

					if (isRawSyntax(value)) {
						res["--grid-component--" + size] = value;
					} else {
						var parts = value.split("|");
						var rows = parts[0]
							.split("/")
							.map(x => `'${x.trim()}'`)
							.join(" ");
						var cols = parts[1] || "";
						if (cols) {
							cols = "/" + cols;
						}
						res["--grid-component--" + size] = `${rows} ${cols}`;
					}
				}
			}

			res["grid-gap"] = this.gap || "0rem";

			return res;
		},
		klass() {
			let s = Object.assign(
				{},
				createClass(this, "grid-component", boxClass),
				createClass(this, "grid-component", breakPoints)
			);
			return s;
		}
	}
});

// CONCATENATED MODULE: ./src/components/Grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Gridvue_type_script_lang_js_ = (Gridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Grid.vue?vue&type=style&index=0&lang=scss&
var Gridvue_type_style_index_0_lang_scss_ = __webpack_require__("2342");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Grid.vue






/* normalize component */

var component = normalizeComponent(
  components_Gridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Grid = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"502b32a5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Cols.vue?vue&type=template&id=71f85b06&
var Colsvue_type_template_id_71f85b06_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cols-component",class:_vm.klass,style:(_vm.style),on:{"click":function($event){return _vm.$emit('click')}}},[_vm._t("default")],2)}
var Colsvue_type_template_id_71f85b06_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Cols.vue?vue&type=template&id=71f85b06&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Cols.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const Colsvue_type_script_lang_js_breakPoints = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"rh",
	"fh",
	"qh",
	"kh"
];

const Colsvue_type_script_lang_js_boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const Colsvue_type_script_lang_js_boxStyle = ["size", "width", "height", "span", "area"];

function createTracks(vm) {
	let res = {};
	let fit = vm.fit !== undefined ? "auto-fit" : "auto-fill";

	for (const size of Colsvue_type_script_lang_js_breakPoints) {
		if (vm[size]) {
			/** @type { String } */
			let value = "" + vm[size] + "";

			// number of columns
			if (value.match(/^\d+$/)) {
				value = `repeat(${value}, 1fr)`;
			} else if (!value.includes(" ")) {
				// repeat single size
				if (value.includes("/")) {
					// calcaulte size if there is an expression
					value = value.replace(
						/(\d+)\/(\d+)/g,
						`calc(100% * $1 / $2 - ${vm.gap || "0px"})`
					);
				}
				value = `repeat(${fit}, minmax(${value}, 1fr))`;
			} else {
				// multiple sizes specified
				let columnCount = value.split(" ").length;
				let gap = vm.gap || "0px";
				let fullSize = `calc(100% - ${gap} * ${columnCount - 1})`;
				if (value.includes("/")) {
					// just calculate math
					value = value.replace(
						/(\d+)\/(\d+)/g,
						`calc(${fullSize} * $1 / $2)`
					);
				}
			}
			res["--" + size] = value;
		}
	}

	res["grid-gap"] = vm.gap || "0px";
	return res;
}

function Colsvue_type_script_lang_js_createClass(vm, prefix, flags) {
	let s = {};

	for (let key of flags) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function Colsvue_type_script_lang_js_createStyles(vm) {
	let s = {};

	if (vm.size !== undefined) {
		s["flex-basis"] = vm.size;
	}
	if (vm.width !== undefined) {
		s["width"] = vm.width;
	}
	if (vm.height !== undefined) {
		s["height"] = vm.height;
	}
	if (vm.span) {
		s["grid-column"] = "span " + vm.span;
	}

	if (vm.area) {
		s["grid-area"] = vm.area;
	}
	return s;
}

const Colsvue_type_script_lang_js_props = [...Colsvue_type_script_lang_js_boxStyle, ...Colsvue_type_script_lang_js_boxClass, ...Colsvue_type_script_lang_js_breakPoints, "gap", "fit"];

/* harmony default export */ var Colsvue_type_script_lang_js_ = ({
	props: Colsvue_type_script_lang_js_props,
	computed: {
		style() {
			let res = Object.assign({}, Colsvue_type_script_lang_js_createStyles(this), createTracks(this));
			return res;
		},
		klass() {
			let s = Object.assign(
				{},
				Colsvue_type_script_lang_js_createClass(this, "cols-component", Colsvue_type_script_lang_js_boxClass),
				Colsvue_type_script_lang_js_createClass(this, "cols-component", Colsvue_type_script_lang_js_breakPoints)
			);
			return s;
		}
	}
});

// CONCATENATED MODULE: ./src/components/Cols.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Colsvue_type_script_lang_js_ = (Colsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Cols.vue?vue&type=style&index=0&lang=scss&
var Colsvue_type_style_index_0_lang_scss_ = __webpack_require__("087e");

// CONCATENATED MODULE: ./src/components/Cols.vue






/* normalize component */

var Cols_component = normalizeComponent(
  components_Colsvue_type_script_lang_js_,
  Colsvue_type_template_id_71f85b06_render,
  Colsvue_type_template_id_71f85b06_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Cols = (Cols_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"502b32a5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Rows.vue?vue&type=template&id=04671898&
var Rowsvue_type_template_id_04671898_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rows-component",class:_vm.klass,style:(_vm.style),on:{"click":function($event){return _vm.$emit('click')}}},[_vm._t("default")],2)}
var Rowsvue_type_template_id_04671898_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Rows.vue?vue&type=template&id=04671898&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Rows.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const Rowsvue_type_script_lang_js_breakPoints = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"rh",
	"fh",
	"qh",
	"kh"
];

const Rowsvue_type_script_lang_js_boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const Rowsvue_type_script_lang_js_boxStyle = ["size", "width", "height", "span", "area"];

function Rowsvue_type_script_lang_js_createTracks(vm) {
	let res = {};
	for (const size of Rowsvue_type_script_lang_js_breakPoints) {
		if (vm[size]) {
			/** @type { String } */
			let value = "" + vm[size] + "";

			// number of columns
			if (value.match(/^\d+$/)) {
				value = `repeat(auto-fill, minmax(calc(100% * 1 / ${value} - ${vm.gap ||
					"0px"}), 1fr))`;
			} else if (!value.includes(" ")) {
				// repeat single size
				if (value.includes("/")) {
					// calcaulte size if there is an expression
					value = value.replace(
						/(\d+)\/(\d+)/g,
						`calc(100% * $1 / $2 - ${vm.gap || "0px"})`
					);
				}
				value = `repeat(auto-fill, minmax(${value}, 1fr))`;
			} else {
				// multiple sizes specified
				let columnCount = value.split(" ").length;
				let gap = vm.gap || "0px";
				let fullSize = `calc(100% - ${gap} * ${columnCount - 1})`;
				if (value.includes("/")) {
					// just calculate math
					value = value.replace(
						/(\d+)\/(\d+)/g,
						`calc(${fullSize} * $1 / $2)`
					);
				}
			}
			res["--" + size] = value;
		}
	}

	res["grid-gap"] = vm.gap || "0px";
	return res;
}

function Rowsvue_type_script_lang_js_createClass(vm, prefix, flags) {
	let s = {};

	for (let key of flags) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function Rowsvue_type_script_lang_js_createStyles(vm) {
	let s = {};

	if (vm.size !== undefined) {
		s["flex-basis"] = vm.size;
	}
	if (vm.width !== undefined) {
		s["width"] = vm.width;
	}
	if (vm.height !== undefined) {
		s["height"] = vm.height;
	}
	if (vm.span) {
		s["grid-column"] = "span " + vm.span;
	}
	if (vm.area) {
		s["grid-area"] = vm.area;
	}
	return s;
}

const Rowsvue_type_script_lang_js_props = [...Rowsvue_type_script_lang_js_boxStyle, ...Rowsvue_type_script_lang_js_boxClass, ...Rowsvue_type_script_lang_js_breakPoints, "gap"];

/* harmony default export */ var Rowsvue_type_script_lang_js_ = ({
	props: Rowsvue_type_script_lang_js_props,
	computed: {
		style() {
			let s = Object.assign({}, Rowsvue_type_script_lang_js_createStyles(this), Rowsvue_type_script_lang_js_createTracks(this));

			return s;
		},
		klass() {
			let s = Object.assign(
				{},
				Rowsvue_type_script_lang_js_createClass(this, "rows-component", Rowsvue_type_script_lang_js_boxClass),
				Rowsvue_type_script_lang_js_createClass(this, "rows-component", Rowsvue_type_script_lang_js_breakPoints)
			);
			return s;
		}
	}
});

// CONCATENATED MODULE: ./src/components/Rows.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Rowsvue_type_script_lang_js_ = (Rowsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Rows.vue?vue&type=style&index=0&lang=scss&
var Rowsvue_type_style_index_0_lang_scss_ = __webpack_require__("612d");

// CONCATENATED MODULE: ./src/components/Rows.vue






/* normalize component */

var Rows_component = normalizeComponent(
  components_Rowsvue_type_script_lang_js_,
  Rowsvue_type_template_id_04671898_render,
  Rowsvue_type_template_id_04671898_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Rows = (Rows_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"502b32a5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Box.vue?vue&type=template&id=a25ce6e6&
var Boxvue_type_template_id_a25ce6e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box-component",class:_vm.klass,style:(_vm.style),on:{"click":function($event){return _vm.$emit('click')}}},[_vm._t("default")],2)}
var Boxvue_type_template_id_a25ce6e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Box.vue?vue&type=template&id=a25ce6e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Box.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const Boxvue_type_script_lang_js_breakPoints = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"rh",
	"fh",
	"qh",
	"kh"
];

const Boxvue_type_script_lang_js_boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const Boxvue_type_script_lang_js_boxStyle = ["size", "width", "height", "span", "area"];

function Boxvue_type_script_lang_js_createClass(vm, prefix, flags) {
	let s = {};
	for (let key of flags) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function Boxvue_type_script_lang_js_createStyles(vm) {
	let s = {};

	if (vm.size !== undefined) {
		s["flex-basis"] = vm.size;
	}
	if (vm.width !== undefined) {
		s["width"] = vm.width;
	}
	if (vm.height !== undefined) {
		s["height"] = vm.height;
	}
	if (vm.span) {
		s["grid-column"] = "span " + vm.span;
	}
	if (vm.area) {
		s["grid-area"] = vm.area;
	}

	return s;
}

const klass = [...Boxvue_type_script_lang_js_boxClass];
const params = [...Boxvue_type_script_lang_js_boxStyle];

/* harmony default export */ var Boxvue_type_script_lang_js_ = ({
	props: [...klass, ...params],
	computed: {
		klass() {
			let s = Boxvue_type_script_lang_js_createClass(this, "box-component", Boxvue_type_script_lang_js_boxClass);
			return s;
		},
		style() {
			let s = Boxvue_type_script_lang_js_createStyles(this);
			return s;
		}
	}
});

// CONCATENATED MODULE: ./src/components/Box.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Boxvue_type_script_lang_js_ = (Boxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Box.vue?vue&type=style&index=0&lang=scss&
var Boxvue_type_style_index_0_lang_scss_ = __webpack_require__("8b1b");

// CONCATENATED MODULE: ./src/components/Box.vue






/* normalize component */

var Box_component = normalizeComponent(
  components_Boxvue_type_script_lang_js_,
  Boxvue_type_template_id_a25ce6e6_render,
  Boxvue_type_template_id_a25ce6e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Box = (Box_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"502b32a5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Cen.vue?vue&type=template&id=76516d52&
var Cenvue_type_template_id_76516d52_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cen-component",class:_vm.klass,style:(_vm.style),on:{"click":function($event){return _vm.$emit('click')}}},[_vm._t("default")],2)}
var Cenvue_type_template_id_76516d52_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Cen.vue?vue&type=template&id=76516d52&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Cen.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const Cenvue_type_script_lang_js_breakPoints = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"rh",
	"fh",
	"qh",
	"kh"
];
const Cenvue_type_script_lang_js_boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const Cenvue_type_script_lang_js_boxStyle = ["size", "width", "height", "span", "area"];

function Cenvue_type_script_lang_js_createClass(vm, prefix, flags) {
	let s = {};

	for (let key of flags) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function Cenvue_type_script_lang_js_createStyles(vm) {
	let s = {};

	if (vm.size !== undefined) {
		s["flex-basis"] = vm.size;
	}
	if (vm.width !== undefined) {
		s["width"] = vm.width;
	}
	if (vm.height !== undefined) {
		s["height"] = vm.height;
	}
	if (vm.span) {
		s["grid-column"] = "span " + vm.span;
	}
	if (vm.area) {
		s["grid-area"] = vm.area;
	}
	return s;
}

const Cenvue_type_script_lang_js_klass = [...Cenvue_type_script_lang_js_boxClass];
const Cenvue_type_script_lang_js_params = [...Cenvue_type_script_lang_js_boxStyle];

/* harmony default export */ var Cenvue_type_script_lang_js_ = ({
	props: [...Cenvue_type_script_lang_js_klass, ...Cenvue_type_script_lang_js_params],
	computed: {
		klass() {
			let s = Cenvue_type_script_lang_js_createClass(this, "cen-component", Cenvue_type_script_lang_js_boxClass);
			return s;
		},
		style() {
			let s = Cenvue_type_script_lang_js_createStyles(this);
			return s;
		}
	}
});

// CONCATENATED MODULE: ./src/components/Cen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cenvue_type_script_lang_js_ = (Cenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Cen.vue?vue&type=style&index=0&lang=scss&
var Cenvue_type_style_index_0_lang_scss_ = __webpack_require__("7f48");

// CONCATENATED MODULE: ./src/components/Cen.vue






/* normalize component */

var Cen_component = normalizeComponent(
  components_Cenvue_type_script_lang_js_,
  Cenvue_type_template_id_76516d52_render,
  Cenvue_type_template_id_76516d52_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Cen = (Cen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"502b32a5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Hor.vue?vue&type=template&id=e22cac3e&
var Horvue_type_template_id_e22cac3e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hor-component",class:_vm.klass,style:(_vm.style),on:{"click":function($event){return _vm.$emit('click')}}},[_vm._t("default")],2)}
var Horvue_type_template_id_e22cac3e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Hor.vue?vue&type=template&id=e22cac3e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Hor.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const Horvue_type_script_lang_js_breakPoints = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"rh",
	"fh",
	"qh",
	"kh"
];
const Horvue_type_script_lang_js_boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const Horvue_type_script_lang_js_boxStyle = ["size", "width", "height", "span", "area"];

function Horvue_type_script_lang_js_createClass(vm, prefix, flags) {
	let s = {};

	for (let key of flags) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function Horvue_type_script_lang_js_createStyles(vm) {
	let s = {};

	if (vm.size !== undefined) {
		s["flex-basis"] = vm.size;
	}
	if (vm.width !== undefined) {
		s["width"] = vm.width;
	}
	if (vm.height !== undefined) {
		s["height"] = vm.height;
	}
	if (vm.span) {
		s["grid-column"] = "span " + vm.span;
	}
	if (vm.area) {
		s["grid-area"] = vm.area;
	}
	return s;
}

const myClass = [
	"top",
	"bottom",
	"left",
	"right",
	"center",
	"middle",
	"wrap",
	"around",
	"space",
	"evenly"
];

const Horvue_type_script_lang_js_props = [...Horvue_type_script_lang_js_boxStyle, ...Horvue_type_script_lang_js_boxClass, ...myClass];

/* harmony default export */ var Horvue_type_script_lang_js_ = ({
	props: Horvue_type_script_lang_js_props,
	computed: {
		klass() {
			let s = Object.assign(
				{},
				Horvue_type_script_lang_js_createClass(this, "hor-component", myClass),
				Horvue_type_script_lang_js_createClass(this, "hor-component", Horvue_type_script_lang_js_boxClass)
			);
			return s;
		},
		style() {
			let s = Horvue_type_script_lang_js_createStyles(this);
			return s;
		}
	}
});

// CONCATENATED MODULE: ./src/components/Hor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Horvue_type_script_lang_js_ = (Horvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Hor.vue?vue&type=style&index=0&lang=scss&
var Horvue_type_style_index_0_lang_scss_ = __webpack_require__("ed29");

// CONCATENATED MODULE: ./src/components/Hor.vue






/* normalize component */

var Hor_component = normalizeComponent(
  components_Horvue_type_script_lang_js_,
  Horvue_type_template_id_e22cac3e_render,
  Horvue_type_template_id_e22cac3e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Hor = (Hor_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"502b32a5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Ver.vue?vue&type=template&id=6f01d5b1&
var Vervue_type_template_id_6f01d5b1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ver-component",class:_vm.klass,on:{"click":function($event){return _vm.$emit('click')}}},[_vm._t("default")],2)}
var Vervue_type_template_id_6f01d5b1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Ver.vue?vue&type=template&id=6f01d5b1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Ver.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const Vervue_type_script_lang_js_breakPoints = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"rh",
	"fh",
	"qh",
	"kh"
];
const Vervue_type_script_lang_js_boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const Vervue_type_script_lang_js_boxStyle = ["size", "width", "height", "span", "area"];

function Vervue_type_script_lang_js_createClass(vm, prefix, flags) {
	let s = {};

	for (let key of flags) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function Vervue_type_script_lang_js_createStyles(vm) {
	let s = {};

	if (vm.size !== undefined) {
		s["flex-basis"] = vm.size;
	}
	if (vm.width !== undefined) {
		s["width"] = vm.width;
	}
	if (vm.height !== undefined) {
		s["height"] = vm.height;
	}
	if (vm.span) {
		s["grid-column"] = "span " + vm.span;
	}
	if (vm.area) {
		s["grid-area"] = vm.area;
	}
	return s;
}

const Vervue_type_script_lang_js_myClass = [
	"top",
	"bottom",
	"left",
	"right",
	"center",
	"middle",
	"wrap",
	"around",
	"space",
	"evenly"
];
const Vervue_type_script_lang_js_klass = [...Vervue_type_script_lang_js_boxClass, ...Vervue_type_script_lang_js_myClass];
const Vervue_type_script_lang_js_params = [...Vervue_type_script_lang_js_boxStyle];

/* harmony default export */ var Vervue_type_script_lang_js_ = ({
	props: [...Vervue_type_script_lang_js_klass, ...Vervue_type_script_lang_js_params],
	computed: {
		klass() {
			let s = Object.assign(
				{},
				Vervue_type_script_lang_js_createClass(this, "ver-component", Vervue_type_script_lang_js_myClass),
				Vervue_type_script_lang_js_createClass(this, "ver-component", Vervue_type_script_lang_js_boxClass)
			);
			return s;
		},
		style() {
			let s = Vervue_type_script_lang_js_createStyles(this);
			return s;
		}
	}
});

// CONCATENATED MODULE: ./src/components/Ver.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Vervue_type_script_lang_js_ = (Vervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Ver.vue?vue&type=style&index=0&lang=scss&
var Vervue_type_style_index_0_lang_scss_ = __webpack_require__("ee23");

// CONCATENATED MODULE: ./src/components/Ver.vue






/* normalize component */

var Ver_component = normalizeComponent(
  components_Vervue_type_script_lang_js_,
  Vervue_type_template_id_6f01d5b1_render,
  Vervue_type_template_id_6f01d5b1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ver = (Ver_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"502b32a5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breakpoint.vue?vue&type=template&id=27c33043&
var Breakpointvue_type_template_id_27c33043_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"breakpoint"}})}
var Breakpointvue_type_template_id_27c33043_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Breakpoint.vue?vue&type=template&id=27c33043&

// EXTERNAL MODULE: ./src/components/Breakpoint.vue?vue&type=style&index=0&lang=scss&
var Breakpointvue_type_style_index_0_lang_scss_ = __webpack_require__("8eb0");

// CONCATENATED MODULE: ./src/components/Breakpoint.vue

var script = {}



/* normalize component */

var Breakpoint_component = normalizeComponent(
  script,
  Breakpointvue_type_template_id_27c33043_render,
  Breakpointvue_type_template_id_27c33043_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Breakpoint = (Breakpoint_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"502b32a5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Max.vue?vue&type=template&id=67cf2fc7&
var Maxvue_type_template_id_67cf2fc7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"max-component",class:_vm.klass,style:(_vm.style),on:{"click":function($event){return _vm.$emit('click')}}},[_vm._t("default")],2)}
var Maxvue_type_template_id_67cf2fc7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Max.vue?vue&type=template&id=67cf2fc7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Max.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const Maxvue_type_script_lang_js_breakPoints = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"rh",
	"fh",
	"qh",
	"kh"
];

const Maxvue_type_script_lang_js_props = ["xs", "sm", "md", "lg", "xl", "xxl", "rh", "fh", "qh", "kh"];

const Maxvue_type_script_lang_js_boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const Maxvue_type_script_lang_js_boxStyle = ["size", "width", "height", "span", "area"];

function Maxvue_type_script_lang_js_createClass(vm, prefix, flags) {
	let s = {};

	for (let key of flags) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function Maxvue_type_script_lang_js_createStyles(vm) {
	let s = {};

	if (vm.size !== undefined) {
		s["flex-basis"] = vm.size;
	}
	if (vm.width !== undefined) {
		s["width"] = vm.width;
	}
	if (vm.height !== undefined) {
		s["height"] = vm.height;
	}
	if (vm.span) {
		s["grid-column"] = "span " + vm.span;
	}
	if (vm.area) {
		s["grid-area"] = vm.area;
	}
	return s;
}

/* harmony default export */ var Maxvue_type_script_lang_js_ = ({
	props: [...Maxvue_type_script_lang_js_props],
	computed: {
		style() {
			let res = Maxvue_type_script_lang_js_createStyles(this);
			return res;
		},
		klass() {
			let s = Object.assign(
				{},
				Maxvue_type_script_lang_js_createClass(this, "grid-component", Maxvue_type_script_lang_js_boxClass)
			);
			return s;
		}
	}
});

// CONCATENATED MODULE: ./src/components/Max.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Maxvue_type_script_lang_js_ = (Maxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Max.vue?vue&type=style&index=0&lang=scss&
var Maxvue_type_style_index_0_lang_scss_ = __webpack_require__("6813");

// CONCATENATED MODULE: ./src/components/Max.vue






/* normalize component */

var Max_component = normalizeComponent(
  components_Maxvue_type_script_lang_js_,
  Maxvue_type_template_id_67cf2fc7_render,
  Maxvue_type_template_id_67cf2fc7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Max = (Max_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"502b32a5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wrap.vue?vue&type=template&id=88042dd4&
var Wrapvue_type_template_id_88042dd4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrap-component",class:_vm.klass,style:(_vm.style),on:{"click":function($event){return _vm.$emit('click')}}},[_vm._t("default")],2)}
var Wrapvue_type_template_id_88042dd4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wrap.vue?vue&type=template&id=88042dd4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wrap.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const Wrapvue_type_script_lang_js_breakPoints = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"rh",
	"fh",
	"qh",
	"kh"
];

const Wrapvue_type_script_lang_js_boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const Wrapvue_type_script_lang_js_boxStyle = ["size", "width", "height", "span", "area"];

function Wrapvue_type_script_lang_js_createClass(vm, prefix, flags) {
	let s = {};
	for (let key of flags) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function Wrapvue_type_script_lang_js_createStyles(vm) {
	let s = {};

	if (vm.size !== undefined) {
		s["flex-basis"] = vm.size;
	}
	if (vm.width !== undefined) {
		s["width"] = vm.width;
	}
	if (vm.height !== undefined) {
		s["height"] = vm.height;
	}
	if (vm.span) {
		s["grid-column"] = "span " + vm.span;
	}
	if (vm.area) {
		s["grid-area"] = vm.area;
	}
	return s;
}

const Wrapvue_type_script_lang_js_klass = [...Wrapvue_type_script_lang_js_boxClass];
const Wrapvue_type_script_lang_js_params = [...Wrapvue_type_script_lang_js_boxStyle];

/* harmony default export */ var Wrapvue_type_script_lang_js_ = ({
	props: [...Wrapvue_type_script_lang_js_klass, ...Wrapvue_type_script_lang_js_params],
	computed: {
		klass() {
			let s = Wrapvue_type_script_lang_js_createClass(this, "box-component", Wrapvue_type_script_lang_js_boxClass);
			return s;
		},
		style() {
			let s = Wrapvue_type_script_lang_js_createStyles(this);
			return s;
		}
	}
});

// CONCATENATED MODULE: ./src/components/Wrap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Wrapvue_type_script_lang_js_ = (Wrapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Wrap.vue?vue&type=style&index=0&lang=scss&
var Wrapvue_type_style_index_0_lang_scss_ = __webpack_require__("e622");

// CONCATENATED MODULE: ./src/components/Wrap.vue






/* normalize component */

var Wrap_component = normalizeComponent(
  components_Wrapvue_type_script_lang_js_,
  Wrapvue_type_template_id_88042dd4_render,
  Wrapvue_type_template_id_88042dd4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Wrap = (Wrap_component.exports);
// CONCATENATED MODULE: ./src/index.ts











var components = {
    Grid: Grid,
    Cols: Cols,
    Rows: Rows,
    Box: Box,
    Cen: Cen,
    Hor: Hor,
    Ver: Ver,
    Max: Max,
    Wrap: Wrap,
    Breakpoint: Breakpoint
};

/* harmony default export */ var src = (__assign({ install: function (vue, options) {
        var prefix = '';
        if (options && typeof options == 'string') {
            prefix = options;
        }
        for (var key in components) {
            vue.component(prefix + key.toLowerCase(), components[key]);
        }
    } }, components));

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport Grid */__webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* concated harmony reexport Cols */__webpack_require__.d(__webpack_exports__, "Cols", function() { return Cols; });
/* concated harmony reexport Rows */__webpack_require__.d(__webpack_exports__, "Rows", function() { return Rows; });
/* concated harmony reexport Box */__webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* concated harmony reexport Cen */__webpack_require__.d(__webpack_exports__, "Cen", function() { return Cen; });
/* concated harmony reexport Hor */__webpack_require__.d(__webpack_exports__, "Hor", function() { return Hor; });
/* concated harmony reexport Max */__webpack_require__.d(__webpack_exports__, "Max", function() { return Max; });
/* concated harmony reexport Ver */__webpack_require__.d(__webpack_exports__, "Ver", function() { return Ver; });
/* concated harmony reexport Wrap */__webpack_require__.d(__webpack_exports__, "Wrap", function() { return Wrap; });
/* concated harmony reexport Breakpoint */__webpack_require__.d(__webpack_exports__, "Breakpoint", function() { return Breakpoint; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-layout.umd.js.map