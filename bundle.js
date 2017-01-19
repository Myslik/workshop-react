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

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var grid_1 = __webpack_require__(3);
	var demo_1 = __webpack_require__(4);
	var adapter = new demo_1.DemoAdapter();
	ReactDOM.render(React.createElement(grid_1.Grid, { adapter: adapter }), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Grid = (function (_super) {
	    __extends(Grid, _super);
	    function Grid(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            columns: [],
	            rows: []
	        };
	        return _this;
	    }
	    Grid.prototype.render = function () {
	        return (React.createElement("div", { className: "react-grid" }, "Grid"));
	    };
	    return Grid;
	}(React.Component));
	exports.Grid = Grid;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var DemoAdapter = (function () {
	    function DemoAdapter() {
	    }
	    DemoAdapter.prototype.fetchColumns = function () {
	        return new Promise(function (resolve, reject) {
	            resolve([
	                { key: "id", width: 70 },
	                { key: "name", width: 150 }
	            ]);
	        });
	    };
	    DemoAdapter.prototype.fetchRows = function () {
	        return new Promise(function (resolve, reject) {
	            resolve([
	                { id: "1", name: "Jane" },
	                { id: "2", name: "Thomas" }
	            ]);
	        });
	    };
	    return DemoAdapter;
	}());
	exports.DemoAdapter = DemoAdapter;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map