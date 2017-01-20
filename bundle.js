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
	var demo_1 = __webpack_require__(10);
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
	var header_1 = __webpack_require__(4);
	var body_1 = __webpack_require__(6);
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
	    Grid.prototype.render = function () {
	        return (React.createElement("div", { className: "react-grid" },
	            React.createElement(header_1.Header, { columns: this.state.columns }),
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
	var Header = (function (_super) {
	    __extends(Header, _super);
	    function Header() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Header.prototype.render = function () {
	        return (React.createElement("div", { className: "react-grid-header" }, this.props.columns.map(function (column) {
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
	var row_1 = __webpack_require__(7);
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var cell_1 = __webpack_require__(8);
	var checkboxCell_1 = __webpack_require__(9);
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ function(module, exports) {

	"use strict";
	var DemoAdapter = (function () {
	    function DemoAdapter() {
	    }
	    DemoAdapter.prototype.fetchColumns = function () {
	        return new Promise(function (resolve, reject) {
	            resolve([
	                { key: "id" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjY4NjlkODA5MmQ5NDNmNjJlMDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJDZWxsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NlbGwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jaGVja2JveENlbGwudHN4Iiwid2VicGFjazovLy8uL3NyYy9kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSxvQ0FBK0I7QUFDL0IsdUNBQXNDO0FBQ3RDLHFDQUE4QjtBQUM5QixzQ0FBcUM7QUFFckMsS0FBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7QUFFaEMsU0FBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxXQUFJLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBSSxFQUMxQixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNyQyxDQUFDOzs7Ozs7O0FDVkYsd0I7Ozs7OztBQ0FBLDJCOzs7Ozs7Ozs7Ozs7QUNBQSxvQ0FBK0I7QUFFL0IsdUNBQWtDO0FBQ2xDLHFDQUE4QjtBQVk5QjtLQUEwQix3QkFBdUM7S0FD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LENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLFNBQUcsQ0FDN0QsQ0FDVCxDQUFDO0tBQ04sQ0FBQztLQUNMLG1CQUFDO0FBQUQsRUFBQyxDQXBCaUMsS0FBSyxDQUFDLFNBQVM7QUFDdEMsMEJBQVksR0FBRztLQUNsQixPQUFPLEVBQUUsS0FBSztFQUNqQjtBQUhRLHFDQUFZOzs7Ozs7OztBQ0x6QjtLQUFBO0tBa0JBLENBQUM7S0FqQkcsa0NBQVksR0FBWjtTQUNJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBWSxVQUFDLE9BQU8sRUFBRSxNQUFNO2FBQzFDLE9BQU8sQ0FBQztpQkFDSixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7aUJBQ2IsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7Y0FDOUIsQ0FBQyxDQUFDO1NBQ1AsQ0FBQyxDQUFDLENBQUM7S0FDUCxDQUFDO0tBRUQsK0JBQVMsR0FBVDtTQUNJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBRSxNQUFNO2FBQ3ZDLE9BQU8sQ0FBQztpQkFDSixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtpQkFDekIsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Y0FDOUIsQ0FBQyxDQUFDO1NBQ1AsQ0FBQyxDQUFDLENBQUM7S0FDUCxDQUFDO0tBQ0wsa0JBQUM7QUFBRCxFQUFDO0FBbEJZLG1DQUFXIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY2ODY5ZDgwOTJkOTQzZjYyZTA0IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL2dyaWRcIjtcclxuaW1wb3J0IHsgRGVtb0FkYXB0ZXIgfSBmcm9tIFwiLi9kZW1vXCI7XHJcblxyXG52YXIgYWRhcHRlciA9IG5ldyBEZW1vQWRhcHRlcigpO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEdyaWQgYWRhcHRlcj17YWRhcHRlcn0gLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVcIilcclxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElSb3csIElDb2x1bW4sIElBZGFwdGVyIH0gZnJvbSBcIi4vYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2JvZHlcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRQcm9wcyB7XHJcbiAgICBhZGFwdGVyOiBJQWRhcHRlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFN0YXRlIHtcclxuICAgIGNvbHVtbnM6IElDb2x1bW5bXTtcclxuICAgIHJvd3M6IElSb3dbXTtcclxuICAgIHNlbGVjdGlvbjogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElHcmlkUHJvcHMsIElHcmlkU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgICAgICAgICByb3dzOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0ID0gdGhpcy5oYW5kbGVTZWxlY3QuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaENvbHVtbnMoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGFwdGVyLmZldGNoQ29sdW1ucygpLnRoZW4oY29sdW1ucyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHByZXZTdGF0ZS5jb2x1bW5zID0gY29sdW1ucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgIH0sICgpID0+IHsgdGhpcy5mZXRjaFJvd3MoKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hSb3dzKCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuYWRhcHRlci5mZXRjaFJvd3MoKS50aGVuKHJvd3MgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUucm93cyA9IHJvd3M7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmZldGNoQ29sdW1ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdChyb3dJZDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJldlN0YXRlLnNlbGVjdGlvbi5wdXNoKHJvd0lkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHByZXZTdGF0ZS5zZWxlY3Rpb24uaW5kZXhPZihyb3dJZCk7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUuc2VsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIGNvbHVtbnM9e3RoaXMuc3RhdGUuY29sdW1uc30gLz5cclxuICAgICAgICAgICAgICAgIDxCb2R5IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e3RoaXMuc3RhdGUuY29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICByb3dzPXt0aGlzLnN0YXRlLnJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnN0YXRlLnNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ3JpZC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuL2FkYXB0ZXJcIjtcclxuaW1wb3J0IHsgSGVhZGVyQ2VsbCB9IGZyb20gXCIuL2hlYWRlckNlbGxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlclByb3BzIHtcclxuICAgIGNvbHVtbnM6IElDb2x1bW5bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJSGVhZGVyUHJvcHMsIHZvaWQ+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWdyaWQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvbHVtbi5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRofSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVhZGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGVhZGVyQ2VsbFByb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUhlYWRlckNlbGxQcm9wcywgdm9pZD4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICB3aWR0aDogMTAwXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoICsgXCJweFwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwicmVhY3QtZ3JpZC1oZWFkZXItY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVhZGVyQ2VsbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVJvdywgSUNvbHVtbiB9IGZyb20gXCIuL2FkYXB0ZXJcIjtcclxuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4vcm93XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCb2R5UHJvcHMge1xyXG4gICAgY29sdW1uczogSUNvbHVtbltdO1xyXG4gICAgcm93czogSVJvd1tdO1xyXG4gICAgc2VsZWN0aW9uOiBzdHJpbmdbXTtcclxuICAgIG9uU2VsZWN0OiAocm93SWQ6IHN0cmluZywgY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUJvZHlQcm9wcywgdm9pZD4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZ3JpZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dzLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGVja2VkID0gdGhpcy5wcm9wcy5zZWxlY3Rpb24uaW5kZXhPZihyb3cuaWQpICE9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cm93LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVjaz17KGNoZWNrZWQpID0+IHsgdGhpcy5wcm9wcy5vblNlbGVjdChyb3cuaWQsIGNoZWNrZWQpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PXtyb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17dGhpcy5wcm9wcy5jb2x1bW5zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9keS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUNvbHVtbiwgSVJvdyB9IGZyb20gXCIuL2FkYXB0ZXJcIjtcclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hDZWxsIH0gZnJvbSBcIi4vY2hlY2tib3hDZWxsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSb3dQcm9wcyB7XHJcbiAgICByb3c6IElSb3c7XHJcbiAgICBjb2x1bW5zOiBJQ29sdW1uW107XHJcbiAgICBjaGVja2VkOiBib29sZWFuO1xyXG4gICAgb25DaGVjazogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVJvd1Byb3BzLCB2b2lkPiB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZ3JpZC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveENlbGxcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVjaz17KGNoZWNrZWQpID0+IHsgdGhpcy5wcm9wcy5vbkNoZWNrKGNoZWNrZWQpIH19IC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMucm93W2NvbHVtbi5rZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3cudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDZWxsUHJvcHMge1xyXG4gICAgdmFsdWU6IGFueTtcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQ2VsbFByb3BzLCB2b2lkPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHN0eWxlID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArIFwicHhcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9XCJyZWFjdC1ncmlkLXJvdy1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jZWxsLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3hDZWxsUHJvcHMge1xyXG4gICAgY2hlY2tlZDogYm9vbGVhbjtcclxuICAgIG9uQ2hlY2s6IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElDaGVja2JveENlbGxQcm9wcywgdm9pZD4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBjaGVja2VkOiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjI0cHhcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5wcm9wcy5vbkNoZWNrKCF0aGlzLnByb3BzLmNoZWNrZWQpIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1ncmlkLXJvdy1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSByZWFkT25seSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NoZWNrYm94Q2VsbC50c3giLCJpbXBvcnQgeyBJQWRhcHRlciwgSUNvbHVtbiwgSVJvdyB9IGZyb20gXCIuL2FkYXB0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZW1vQWRhcHRlciBpbXBsZW1lbnRzIElBZGFwdGVyIHtcclxuICAgIGZldGNoQ29sdW1ucygpOiBQcm9taXNlPElDb2x1bW5bXT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxJQ29sdW1uW10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXHJcbiAgICAgICAgICAgICAgICB7IGtleTogXCJpZFwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGtleTogXCJuYW1lXCIsIHdpZHRoOiAxNTAgfVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFJvd3MoKTogUHJvbWlzZTxJUm93W10+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SVJvd1tdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW1xyXG4gICAgICAgICAgICAgICAgeyBpZDogXCIxXCIsIG5hbWU6IFwiSmFuZVwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGlkOiBcIjJcIiwgbmFtZTogXCJUaG9tYXNcIiB9XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlbW8udHMiXSwic291cmNlUm9vdCI6IiJ9