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
	var odata_1 = __webpack_require__(11);
	var adapter = new odata_1.ODataAdapter("http://services.odata.org/TripPinRESTierService/People", [
	    { key: "UserName", width: 100 },
	    { key: "FirstName", width: 100 },
	    { key: "LastName", width: 100 }
	], "UserName");
	ReactDOM.render(React.createElement(grid_1.Grid, { adapter: adapte }), document.getElementById("example"));


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
	var header_1 = __webpack_require__(4);
	var body_1 = __webpack_require__(7);
	var Grid = (function (_super) {
	    __extends(Grid, _super);
	    function Grid(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            columns: [],
	            rows: [],
	            selection: []
	        };
	        _this.handleSelect = _this.handleSelect.bind(_this);
	        _this.handleSelectAll = _this.handleSelectAll.bind(_this);
	        return _this;
	    }
	    Grid.prototype.fetchColumns = function () {
	        var _this = this;
	        this.props.adapter.fetchColumns().then(function (columns) {
	            _this.setState(function (prevState, props) {
	                prevState.columns = columns;
	                return prevState;
	            }, function () { _this.fetchRows(); });
	        });
	    };
	    Grid.prototype.fetchRows = function () {
	        var _this = this;
	        this.props.adapter.fetchRows().then(function (rows) {
	            _this.setState(function (prevState, props) {
	                prevState.rows = rows;
	                return prevState;
	            });
	        });
	    };
	    Grid.prototype.componentDidMount = function () {
	        this.fetchColumns();
	    };
	    Grid.prototype.handleSelect = function (rowId, checked) {
	        this.setState(function (prevState, props) {
	            if (checked) {
	                prevState.selection.push(rowId);
	            }
	            else {
	                var index = prevState.selection.indexOf(rowId);
	                prevState.selection.splice(index, 1);
	            }
	            return prevState;
	        });
	    };
	    Grid.prototype.handleSelectAll = function (all) {
	        this.setState(function (prevState, props) {
	            if (all) {
	                prevState.selection = prevState.rows.map(function (r) { return r.id; });
	            }
	            else {
	                prevState.selection = [];
	            }
	            return prevState;
	        });
	    };
	    Object.defineProperty(Grid.prototype, "width", {
	        get: function () {
	            return this.state.columns
	                .map(function (c) { return c.width; })
	                .reduce(function (p, c) { return p + c; }, 24);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Grid.prototype.render = function () {
	        var style = {
	            width: this.width + "px"
	        };
	        return (React.createElement("div", { style: style, className: "react-grid" },
	            React.createElement(header_1.Header, { columns: this.state.columns, selection: this.state.selection, onSelect: this.handleSelectAll }),
	            React.createElement(body_1.Body, { columns: this.state.columns, rows: this.state.rows, selection: this.state.selection, onSelect: this.handleSelect })));
	    };
	    return Grid;
	}(React.Component));
	exports.Grid = Grid;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var headerCell_1 = __webpack_require__(5);
	var checkboxHeaderCell_1 = __webpack_require__(6);
	var Header = (function (_super) {
	    __extends(Header, _super);
	    function Header() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(Header.prototype, "checked", {
	        get: function () {
	            return this.props.selection.length > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Header.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", { className: "react-grid-header" },
	            React.createElement(checkboxHeaderCell_1.CheckboxHeaderCell, { checked: this.checked, onCheck: function (checked) { _this.props.onSelect(checked); } }),
	            this.props.columns.map(function (column) {
	                return (React.createElement(headerCell_1.HeaderCell, { key: column.key, title: column.key, width: column.width }));
	            })));
	    };
	    return Header;
	}(React.Component));
	exports.Header = Header;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var HeaderCell = (function (_super) {
	    __extends(HeaderCell, _super);
	    function HeaderCell() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    HeaderCell.prototype.render = function () {
	        var style = {
	            width: this.props.width + "px"
	        };
	        return (React.createElement("div", { style: style, className: "react-grid-header-cell" }, this.props.title));
	    };
	    return HeaderCell;
	}(React.Component));
	HeaderCell.defaultProps = {
	    width: 100
	};
	exports.HeaderCell = HeaderCell;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var CheckboxHeaderCell = (function (_super) {
	    __extends(CheckboxHeaderCell, _super);
	    function CheckboxHeaderCell() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    CheckboxHeaderCell.prototype.render = function () {
	        var _this = this;
	        var style = {
	            padding: "1px",
	            width: "24px"
	        };
	        return (React.createElement("div", { onClick: function () { _this.props.onCheck(!_this.props.checked); }, style: style, className: "react-grid-header-cell" },
	            React.createElement("input", { type: "checkbox", checked: this.props.checked, readOnly: true })));
	    };
	    return CheckboxHeaderCell;
	}(React.Component));
	CheckboxHeaderCell.defaultProps = {
	    checked: false
	};
	exports.CheckboxHeaderCell = CheckboxHeaderCell;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var row_1 = __webpack_require__(8);
	var Body = (function (_super) {
	    __extends(Body, _super);
	    function Body() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Body.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", { className: "react-grid-body" }, this.props.rows.map(function (row) {
	            var checked = _this.props.selection.indexOf(row.id) != -1;
	            return (React.createElement(row_1.Row, { key: row.id, checked: checked, onCheck: function (checked) { _this.props.onSelect(row.id, checked); }, row: row, columns: _this.props.columns }));
	        })));
	    };
	    return Body;
	}(React.Component));
	exports.Body = Body;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var cell_1 = __webpack_require__(9);
	var checkboxCell_1 = __webpack_require__(10);
	var Row = (function (_super) {
	    __extends(Row, _super);
	    function Row() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Row.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", { className: "react-grid-row" },
	            React.createElement(checkboxCell_1.CheckboxCell, { checked: this.props.checked, onCheck: function (checked) { _this.props.onCheck(checked); } }),
	            this.props.columns.map(function (column) {
	                var value = _this.props.row[column.key];
	                return (React.createElement(cell_1.Cell, { key: column.key, value: value, width: column.width }));
	            })));
	    };
	    return Row;
	}(React.Component));
	exports.Row = Row;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Cell = (function (_super) {
	    __extends(Cell, _super);
	    function Cell() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Cell.prototype.render = function () {
	        var style = {
	            width: this.props.width + "px"
	        };
	        return (React.createElement("div", { style: style, className: "react-grid-row-cell" }, this.props.value));
	    };
	    return Cell;
	}(React.Component));
	Cell.defaultProps = {
	    width: 100
	};
	exports.Cell = Cell;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var CheckboxCell = (function (_super) {
	    __extends(CheckboxCell, _super);
	    function CheckboxCell() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    CheckboxCell.prototype.render = function () {
	        var _this = this;
	        var style = {
	            padding: "1px",
	            width: "24px"
	        };
	        return (React.createElement("div", { onClick: function () { _this.props.onCheck(!_this.props.checked); }, style: style, className: "react-grid-row-cell" },
	            React.createElement("input", { type: "checkbox", checked: this.props.checked, readOnly: true })));
	    };
	    return CheckboxCell;
	}(React.Component));
	CheckboxCell.defaultProps = {
	    checked: false
	};
	exports.CheckboxCell = CheckboxCell;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var ODataAdapter = (function () {
	    function ODataAdapter(url, columns, key) {
	        this.url = url;
	        this.columns = columns;
	        this.key = key;
	    }
	    ODataAdapter.prototype.fetchColumns = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            resolve(_this.columns);
	        });
	    };
	    ODataAdapter.prototype.buildUri = function (query) {
	        if (query) {
	            var buffer = [];
	            if (query.sorting) {
	                var suffix = query.sorting.asc === false ? " desc" : " asc";
	                buffer.push("$orderby=" + query.sorting.key + suffix);
	            }
	            return this.url + "?" + buffer.join("&");
	        }
	        return this.url;
	    };
	    ODataAdapter.prototype.handleResponse = function (response) {
	        var _this = this;
	        return response.value.map(function (r) {
	            r["id"] = r[_this.key];
	            return r;
	        });
	    };
	    ODataAdapter.prototype.fetchRows = function (query) {
	        var _this = this;
	        var uri = this.buildUri(query);
	        return new Promise(function (resolve, reject) {
	            var request = new XMLHttpRequest();
	            request.open("GET", uri, true);
	            request.onload = function () {
	                if (request.status >= 200 && request.status < 400) {
	                    var response = JSON.parse(request.responseText);
	                    resolve(_this.handleResponse(response));
	                }
	                else {
	                    reject();
	                }
	            };
	            request.onerror = function () {
	                reject();
	            };
	            request.send();
	        });
	    };
	    return ODataAdapter;
	}());
	exports.ODataAdapter = ODataAdapter;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTI5MGE0YzRjZjZmN2VhODdiMjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJDZWxsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tib3hIZWFkZXJDZWxsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NlbGwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jaGVja2JveENlbGwudHN4Iiwid2VicGFjazovLy8uL3NyYy9vZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esb0NBQStCO0FBQy9CLHVDQUFzQztBQUN0QyxxQ0FBOEI7QUFDOUIsdUNBQXVDO0FBRXZDLEtBQUksT0FBTyxHQUFHLElBQUksb0JBQVksQ0FDMUIsd0RBQXdELEVBQ3hEO0tBQ0ksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7S0FDL0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7S0FDaEMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7RUFD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LENBQUM7U0FDbkIsQ0FBQyxDQUFDLENBQUM7S0FDUCxDQUFDO0tBQ0wsbUJBQUM7QUFBRCxFQUFDO0FBL0NZLHFDQUFZIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDkyOTBhNGM0Y2Y2ZjdlYTg3YjI2IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL2dyaWRcIjtcclxuaW1wb3J0IHsgT0RhdGFBZGFwdGVyIH0gZnJvbSBcIi4vb2RhdGFcIjtcclxuXHJcbnZhciBhZGFwdGVyID0gbmV3IE9EYXRhQWRhcHRlcihcclxuICAgIFwiaHR0cDovL3NlcnZpY2VzLm9kYXRhLm9yZy9UcmlwUGluUkVTVGllclNlcnZpY2UvUGVvcGxlXCIsIFxyXG4gICAgW1xyXG4gICAgICAgIHsga2V5OiBcIlVzZXJOYW1lXCIsIHdpZHRoOiAxMDAgfSxcclxuICAgICAgICB7IGtleTogXCJGaXJzdE5hbWVcIiwgd2lkdGg6IDEwMCB9LFxyXG4gICAgICAgIHsga2V5OiBcIkxhc3ROYW1lXCIsIHdpZHRoOiAxMDAgfVxyXG4gICAgXSwgXHJcbiAgICBcIlVzZXJOYW1lXCIpO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEdyaWQgYWRhcHRlcj17YWRhcHRlfSAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZVwiKVxyXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50c3giLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVJvdywgSUNvbHVtbiwgSUFkYXB0ZXIgfSBmcm9tIFwiLi9hZGFwdGVyXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcIi4vYm9keVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFByb3BzIHtcclxuICAgIGFkYXB0ZXI6IElBZGFwdGVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkU3RhdGUge1xyXG4gICAgY29sdW1uczogSUNvbHVtbltdO1xyXG4gICAgcm93czogSVJvd1tdO1xyXG4gICAgc2VsZWN0aW9uOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUdyaWRQcm9wcywgSUdyaWRTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29sdW1uczogW10sXHJcbiAgICAgICAgICAgIHJvd3M6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3QgPSB0aGlzLmhhbmRsZVNlbGVjdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0QWxsID0gdGhpcy5oYW5kbGVTZWxlY3RBbGwuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaENvbHVtbnMoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGFwdGVyLmZldGNoQ29sdW1ucygpLnRoZW4oY29sdW1ucyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHByZXZTdGF0ZS5jb2x1bW5zID0gY29sdW1ucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgIH0sICgpID0+IHsgdGhpcy5mZXRjaFJvd3MoKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hSb3dzKCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuYWRhcHRlci5mZXRjaFJvd3MoKS50aGVuKHJvd3MgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUucm93cyA9IHJvd3M7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmZldGNoQ29sdW1ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdChyb3dJZDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJldlN0YXRlLnNlbGVjdGlvbi5wdXNoKHJvd0lkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHByZXZTdGF0ZS5zZWxlY3Rpb24uaW5kZXhPZihyb3dJZCk7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUuc2VsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RBbGwoYWxsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUuc2VsZWN0aW9uID0gcHJldlN0YXRlLnJvd3MubWFwKHIgPT4gci5pZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUuc2VsZWN0aW9uID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb2x1bW5zXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLndpZHRoKVxyXG4gICAgICAgICAgICAucmVkdWNlKChwLCBjKSA9PiB7IHJldHVybiBwICsgYyB9LCAyNCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGggKyBcInB4XCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwicmVhY3QtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXt0aGlzLnN0YXRlLmNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnN0YXRlLnNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3RBbGx9IC8+XHJcbiAgICAgICAgICAgICAgICA8Qm9keSBcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXt0aGlzLnN0YXRlLmNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17dGhpcy5zdGF0ZS5yb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dyaWQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi9hZGFwdGVyXCI7XHJcbmltcG9ydCB7IEhlYWRlckNlbGwgfSBmcm9tIFwiLi9oZWFkZXJDZWxsXCI7XHJcbmltcG9ydCB7IENoZWNrYm94SGVhZGVyQ2VsbCB9IGZyb20gXCIuL2NoZWNrYm94SGVhZGVyQ2VsbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGVhZGVyUHJvcHMge1xyXG4gICAgY29sdW1uczogSUNvbHVtbltdO1xyXG4gICAgc2VsZWN0aW9uOiBzdHJpbmdbXTtcclxuICAgIG9uU2VsZWN0OiAoYWxsOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElIZWFkZXJQcm9wcywgdm9pZD4ge1xyXG4gICAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0aW9uLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZ3JpZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveEhlYWRlckNlbGxcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVjaz17KGNoZWNrZWQpID0+IHsgdGhpcy5wcm9wcy5vblNlbGVjdChjaGVja2VkKSB9fSAvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvbHVtbi5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlckNlbGxQcm9wcyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElIZWFkZXJDZWxsUHJvcHMsIHZvaWQ+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHN0eWxlID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArIFwicHhcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cInJlYWN0LWdyaWQtaGVhZGVyLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlYWRlckNlbGwudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2JveEhlYWRlckNlbGxQcm9wcyB7XHJcbiAgICBjaGVja2VkOiBib29sZWFuO1xyXG4gICAgb25DaGVjazogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveEhlYWRlckNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUNoZWNrYm94SGVhZGVyQ2VsbFByb3BzLCB2b2lkPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IHtcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxcHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMjRweFwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLm9uQ2hlY2soIXRoaXMucHJvcHMuY2hlY2tlZCkgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWdyaWQtaGVhZGVyLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IHJlYWRPbmx5IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hlY2tib3hIZWFkZXJDZWxsLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJUm93LCBJQ29sdW1uIH0gZnJvbSBcIi4vYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi9yb3dcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJvZHlQcm9wcyB7XHJcbiAgICBjb2x1bW5zOiBJQ29sdW1uW107XHJcbiAgICByb3dzOiBJUm93W107XHJcbiAgICBzZWxlY3Rpb246IHN0cmluZ1tdO1xyXG4gICAgb25TZWxlY3Q6IChyb3dJZDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQm9keVByb3BzLCB2b2lkPiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1ncmlkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJvd3MubWFwKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLnByb3BzLnNlbGVjdGlvbi5pbmRleE9mKHJvdy5pZCkgIT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyb3cuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrPXsoY2hlY2tlZCkgPT4geyB0aGlzLnByb3BzLm9uU2VsZWN0KHJvdy5pZCwgY2hlY2tlZCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c9e3Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2R5LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uLCBJUm93IH0gZnJvbSBcIi4vYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveENlbGwgfSBmcm9tIFwiLi9jaGVja2JveENlbGxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvd1Byb3BzIHtcclxuICAgIHJvdzogSVJvdztcclxuICAgIGNvbHVtbnM6IElDb2x1bW5bXTtcclxuICAgIGNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgICBvbkNoZWNrOiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUm93UHJvcHMsIHZvaWQ+IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1ncmlkLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94Q2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrPXsoY2hlY2tlZCkgPT4geyB0aGlzLnByb3BzLm9uQ2hlY2soY2hlY2tlZCkgfX0gLz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5yb3dbY29sdW1uLmtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Jvdy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNlbGxQcm9wcyB7XHJcbiAgICB2YWx1ZTogYW55O1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElDZWxsUHJvcHMsIHZvaWQ+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoICsgXCJweFwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cInJlYWN0LWdyaWQtcm93LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NlbGwudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2JveENlbGxQcm9wcyB7XHJcbiAgICBjaGVja2VkOiBib29sZWFuO1xyXG4gICAgb25DaGVjazogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUNoZWNrYm94Q2VsbFByb3BzLCB2b2lkPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IHtcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxcHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMjRweFwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLm9uQ2hlY2soIXRoaXMucHJvcHMuY2hlY2tlZCkgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWdyaWQtcm93LWNlbGxcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IHJlYWRPbmx5IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hlY2tib3hDZWxsLnRzeCIsImltcG9ydCB7IElSb3csIElDb2x1bW4sIElRdWVyeSwgSUFkYXB0ZXIgfSBmcm9tIFwiLi9hZGFwdGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9EYXRhUmVzcG9uc2Uge1xyXG4gICAgdmFsdWU6IGFueVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT0RhdGFBZGFwdGVyIGltcGxlbWVudHMgSUFkYXB0ZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHVybDogc3RyaW5nLCBwdWJsaWMgY29sdW1uczogSUNvbHVtbltdLCBwdWJsaWMga2V5OiBzdHJpbmcpIHsgfVxyXG5cclxuICAgIGZldGNoQ29sdW1ucygpOiBQcm9taXNlPElDb2x1bW5bXT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxJQ29sdW1uW10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmNvbHVtbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVXJpKHF1ZXJ5PzogSVF1ZXJ5KTogc3RyaW5nIHtcclxuICAgICAgICBpZiAocXVlcnkpIHtcclxuICAgICAgICAgICAgdmFyIGJ1ZmZlcjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKHF1ZXJ5LnNvcnRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdWZmaXggPSBxdWVyeS5zb3J0aW5nLmFzYyA9PT0gZmFsc2UgPyBcIiBkZXNjXCIgOiBcIiBhc2NcIjtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoKFwiJG9yZGVyYnk9XCIgKyBxdWVyeS5zb3J0aW5nLmtleSArIHN1ZmZpeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsICsgXCI/XCIgKyBidWZmZXIuam9pbihcIiZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZTogT0RhdGFSZXNwb25zZSk6IElSb3dbXSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnZhbHVlLm1hcChyID0+IHtcclxuICAgICAgICAgICAgcltcImlkXCJdID0gclt0aGlzLmtleV07XHJcbiAgICAgICAgICAgIHJldHVybiByIGFzIElSb3c7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFJvd3MocXVlcnk/OiBJUXVlcnkpOiBQcm9taXNlPElSb3dbXT4ge1xyXG4gICAgICAgIHZhciB1cmkgPSB0aGlzLmJ1aWxkVXJpKHF1ZXJ5KTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SVJvd1tdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmksIHRydWUpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSA8T0RhdGFSZXNwb25zZT5KU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2RhdGEudHMiXSwic291cmNlUm9vdCI6IiJ9