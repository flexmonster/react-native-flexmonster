"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pivot = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeWebview = require("react-native-webview");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Pivot = /*#__PURE__*/function (_React$Component) {
  _inherits(Pivot, _React$Component);
  var _super = _createSuper(Pivot);
  function Pivot() {
    var _this;
    _classCallCheck(this, Pivot);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "addCalculatedMeasure", function (measure) {
      _this.runScript("flexmonster.addCalculatedMeasure(".concat(_this.stringifyParams(measure), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "addCondition", function (condition) {
      _this.runScript("flexmonster.addCondition(".concat(_this.stringifyParams(condition), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      _this.runScript("flexmonster.clear()");
    });
    _defineProperty(_assertThisInitialized(_this), "clearFilter", function (name) {
      _this.runScript("flexmonster.clearFilter(".concat(_this.stringifyParams(name), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "closeFieldsList", function () {
      _this.runScript("flexmonster.closeFieldsList()");
    });
    _defineProperty(_assertThisInitialized(_this), "collapseAllData", function () {
      _this.runScript("flexmonster.collapseAllData()");
    });
    _defineProperty(_assertThisInitialized(_this), "collapseData", function (name) {
      _this.runScript("flexmonster.collapseData(".concat(_this.stringifyParams(name), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "connectTo", function (params) {
      _this.runScript("flexmonster.connectTo(".concat(_this.stringifyParams(params), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "dispose", function () {
      _this.runScript("flexmonster.dispose()");
    });
    _defineProperty(_assertThisInitialized(_this), "expandAllData", function (withAllChildren, type) {
      _this.runScript("flexmonster.expandAllData(".concat(_this.stringifyParams([withAllChildren, type]), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "expandData", function (name) {
      _this.runScript("flexmonster.expandData(".concat(_this.stringifyParams(name), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "exportTo", function (params) {
      return _this.composePromiseWithCallback("exportTo", params);
    });
    _defineProperty(_assertThisInitialized(_this), "getAllConditions", function () {
      return _this.composePromise("getAllConditions");
    });
    _defineProperty(_assertThisInitialized(_this), "getAllHierarchies", function () {
      return _this.composePromise("getAllHierarchies");
    });
    _defineProperty(_assertThisInitialized(_this), "getAllMeasures", function () {
      return _this.composePromise("getAllMeasures");
    });
    _defineProperty(_assertThisInitialized(_this), "getCell", function (rowIdx, colIdx) {
      return _this.composePromise("getCell", rowIdx, colIdx);
    });
    _defineProperty(_assertThisInitialized(_this), "getColumns", function () {
      return _this.composePromise("getColumns");
    });
    _defineProperty(_assertThisInitialized(_this), "getCondition", function (name) {
      return _this.composePromise("getCondition", name);
    });
    _defineProperty(_assertThisInitialized(_this), "getFilter", function (name) {
      return _this.composePromise("getFilter", name);
    });
    _defineProperty(_assertThisInitialized(_this), "getFormat", function (name) {
      return _this.composePromise("getFormat", name);
    });
    _defineProperty(_assertThisInitialized(_this), "getMeasures", function () {
      return _this.composePromise("getMeasures");
    });
    _defineProperty(_assertThisInitialized(_this), "getMembers", function (name) {
      return _this.composePromise("getMembers", name);
    });
    _defineProperty(_assertThisInitialized(_this), "getOptions", function () {
      return _this.composePromise("getOptions");
    });
    _defineProperty(_assertThisInitialized(_this), "getReport", function () {
      return _this.composePromise("getReport");
    });
    _defineProperty(_assertThisInitialized(_this), "getReportFilters", function () {
      return _this.composePromise("getReportFilters");
    });
    _defineProperty(_assertThisInitialized(_this), "getRows", function () {
      return _this.composePromise("getRows");
    });
    _defineProperty(_assertThisInitialized(_this), "getSelectedCell", function () {
      return _this.composePromise("getSelectedCell");
    });
    _defineProperty(_assertThisInitialized(_this), "getSort", function (name) {
      return _this.composePromise("getSort", name);
    });
    _defineProperty(_assertThisInitialized(_this), "getFlatSort", function () {
      return _this.composePromise("getFlatSort");
    });
    _defineProperty(_assertThisInitialized(_this), "getXMLACatalogs", function (url, dataSource) {
      return _this.composePromiseWithCallback("getXMLACatalogs", url, dataSource);
    });
    _defineProperty(_assertThisInitialized(_this), "getXMLACubes", function (url, dataSource, catalog) {
      return _this.composePromiseWithCallback("getXMLACubes", url, dataSource, catalog);
    });
    _defineProperty(_assertThisInitialized(_this), "getXMLADataSources", function (url) {
      return _this.composePromiseWithCallback("getXMLADataSources", url);
    });
    _defineProperty(_assertThisInitialized(_this), "load", function (url) {
      _this.runScript("flexmonster.load(".concat(_this.stringifyParams(url), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "on", function (eventName, callback) {
      _this._events[eventName] = callback;
    });
    _defineProperty(_assertThisInitialized(_this), "off", function (eventName) {
      _this._events[eventName] = false;
    });
    _defineProperty(_assertThisInitialized(_this), "openCalculatedValueEditor", function () {
      _this.runScript("flexmonster.openCalculatedValueEditor()");
    });
    _defineProperty(_assertThisInitialized(_this), "openFieldsList", function () {
      _this.runScript("flexmonster.openFieldsList()");
    });
    _defineProperty(_assertThisInitialized(_this), "openFilter", function (name) {
      _this.runScript("flexmonster.openFilter(".concat(_this.stringifyParams(name), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "refresh", function () {
      _this.runScript("flexmonster.refresh()");
    });
    _defineProperty(_assertThisInitialized(_this), "removeAllCalculatedMeasures", function () {
      _this.runScript("flexmonster.removeAllCalculatedMeasures()");
    });
    _defineProperty(_assertThisInitialized(_this), "removeAllConditions", function () {
      _this.runScript("flexmonster.removeAllConditions()");
    });
    _defineProperty(_assertThisInitialized(_this), "removeCalculatedMeasure", function (name) {
      _this.runScript("flexmonster.removeCalculatedMeasure(".concat(_this.stringifyParams(name), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "removeCondition", function (name) {
      _this.runScript("flexmonster.removeCondition(".concat(_this.stringifyParams(name), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "removeSelection", function () {
      _this.runScript("flexmonster.removeSelection()");
    });
    _defineProperty(_assertThisInitialized(_this), "runQuery", function (query) {
      _this.runScript("flexmonster.runQuery(".concat(_this.stringifyParams(query), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "save", function (params) {
      _this.runScript("flexmonster.save(".concat(_this.stringifyParams(params), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "setFilter", function (name, filter) {
      _this.runScript("flexmonster.setFilter(".concat(_this.stringifyParams([name, filter]), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "setFormat", function (format) {
      _this.runScript("flexmonster.setFormat(".concat(_this.stringifyParams(format), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "setOptions", function (options) {
      _this.runScript("flexmonster.setOptions(".concat(_this.stringifyParams(options), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "setReport", function (report) {
      _this.runScript("flexmonster.setReport(".concat(_this.stringifyParams(report), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "setSort", function (name, sort) {
      _this.runScript("flexmonster.setSort(".concat(_this.stringifyParams([name, sort]), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "setFlatSort", function (sort) {
      _this.runScript("flexmonster.setFlatSort(".concat(_this.stringifyParams([sort]), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "showCharts", function (type) {
      _this.runScript("flexmonster.showCharts(".concat(_this.stringifyParams(type), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "showGrid", function () {
      _this.runScript("flexmonster.showGrid()");
    });
    _defineProperty(_assertThisInitialized(_this), "showGridAndCharts", function (chart, position) {
      _this.runScript("flexmonster.showGridAndCharts(".concat(_this.stringifyParams([chart, position]), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "sortValues", function (axisName, type, tuple, measure) {
      _this.runScript("flexmonster.sortValues(".concat(_this.stringifyParams([axisName, type, tuple, measure]), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "updateData", function (data) {
      _this.runScript("flexmonster.updateData(".concat(_this.stringifyParams(data), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "scrollToRow", function (rowIdx) {
      _this.runScript("flexmonster.scrollToRow(".concat(_this.stringifyParams(rowIdx), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "scrollToColumn", function (colIdx) {
      _this.runScript("flexmonster.scrollToColumn(".concat(_this.stringifyParams(colIdx), ")"));
    });
    _defineProperty(_assertThisInitialized(_this), "onMessage", function (event) {
      var messageData = JSON.parse(event.nativeEvent.data);
      var messageType = messageData.type;
      if (messageType === "event") {
        if (_this.props[messageData.name] instanceof Function) {
          if (_this._events[messageData.name] !== false) {
            _this.props[messageData.name](messageData.data);
          }
        } else if (_this._events[messageData.name] instanceof Function) {
          _this._events[messageData.name](messageData.data);
        }
      } else {
        if (_this._callbacks[messageData.type]) _this._callbacks[messageData.type](messageData.data);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_events", {});
    _defineProperty(_assertThisInitialized(_this), "_callbacks", {});
    _defineProperty(_assertThisInitialized(_this), "composePromise", function (callName) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      return new Promise(function (resolve) {
        _this._callbacks[callName] = function (result) {
          return resolve(result);
        };
        _this.runScript("\n                    var result = flexmonster.".concat(callName, "(").concat(_this.stringifyParams(params), ");\n                    var response = {\n                        type: \"").concat(callName, "\",\n                        data: result\n                    };\n                    window.ReactNativeWebView.postMessage(JSON.stringify(response));\n                "));
      });
    });
    _defineProperty(_assertThisInitialized(_this), "composePromiseWithCallback", function (callName) {
      for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        params[_key3 - 1] = arguments[_key3];
      }
      return new Promise(function (resolve) {
        _this._callbacks[callName] = function (result) {
          return resolve(result);
        };
        _this.runScript("\n                    flexmonster.".concat(callName, "(\n                        ").concat(_this.stringifyParams(params), ",\n                        (result) => {\n                            var response = {\n                                type: \"").concat(callName, "\",\n                                data: result\n                            };\n                            window.ReactNativeWebView.postMessage(JSON.stringify(response));\n                        }\n                    )\n                "));
      });
    });
    _defineProperty(_assertThisInitialized(_this), "stringifyParams", function (params) {
      if (params instanceof Array) {
        var strings = params.map(function (p) {
          return "JSON.parse(`".concat(JSON.stringify(p), "`)");
        });
        return strings.join(",");
      } else {
        return "JSON.parse(`".concat(JSON.stringify(params), "`)");
      }
    });
    _defineProperty(_assertThisInitialized(_this), "runScript", function (scriptStr) {
      _this.webView.injectJavaScript("(function() { ".concat(scriptStr, " })();"));
    });
    _defineProperty(_assertThisInitialized(_this), "registerEvents", function () {
      var eventList = ["afterchartdraw", "aftergriddraw", "beforegriddraw", "cellclick", "chartclick", "celldoubleclick", "datachanged", "dataerror", "datafilecancelled", "dataloaded", "drillthroughclose", "drillthroughopen", "exportcomplete", "exportstart", "fieldslistclose", "fieldslistopen", "filterclose", "filteropen", "loadingdata", "loadinglocalization", "loadingolapstructure", "loadingreportfile", "localizationerror", "localizationloaded", "olapstructureerror", "olapstructureloaded", "openingreportfile", "printcomplete", "printstart", "querycomplete", "queryerror", "ready", "reportchange", "reportcomplete", "reportfilecancelled", "reportfileerror", "runningquery", "unauthorizederror", "update"];
      var strings = eventList.map(function (eventName) {
        // if (this.props[eventName]) {
        return "\n                    flexmonster.on('".concat(eventName, "', function (eventData) {\n                        var response = {\n                            type: \"event\",\n                            name: \"").concat(eventName, "\",\n                            data: eventData\n                        };\n                        window.ReactNativeWebView.postMessage(JSON.stringify(response));\n                    });\n                    ");
        //  }
      });

      return strings.join("");
    });
    _defineProperty(_assertThisInitialized(_this), "htmlTemplate", function () {
      return "\n        <!DOCTYPE html>\n        <html>\n\n        <head>\n            <title>Flexmonster Pivot Table & Charts</title>\n            <meta charset=\"utf-8\" />\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n            <link href=\"https://cdn.flexmonster.com/flexmonster.min.css\" rel=\"stylesheet\">\n            <script src=\"https://cdn.flexmonster.com/toolbar/flexmonster.toolbar.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/flexmonster.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/d3.v3.min.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/canvg.min.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/html2canvas.min.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/jspdf.min.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/promise.min.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/sha1.min.js\"></script>\n        </head>\n\n        <body style=\"margin:0; padding:0; display: flex; height: 100vh;\">\n\n            <div id=\"pivot-container\"></div>\n            <script>\n                new Flexmonster({\n                    container: \"#pivot-container\",\n                    componentFolder: \"https://cdn.flexmonster.com/\",\n                    toolbar: true,\n                    height: \"100%\",\n                    width: \"100%\",\n                    licenseKey: '".concat(_this.props.licenseKey === undefined ? "" : _this.props.licenseKey, "',\n                    report: JSON.parse('").concat(JSON.stringify(_this.props.report), "'),\n                    accessibility: JSON.parse('").concat(JSON.stringify(_this.props.accessibility || {}), "')\n                });\n                ").concat(_this.registerEvents(), "\n            </script>\n        </body>\n\n        </html>\n    ");
    });
    return _this;
  }
  _createClass(Pivot, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.dispose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/_react.default.createElement(_reactNativeWebview.WebView, {
        style: {
          flex: 1,
          backgroundColor: 'transparent'
        },
        originWhitelist: ['*'],
        useWebkit: true,
        javaScriptEnabled: true,
        domStorageEnabled: true,
        scrollEnabled: false,
        automaticallyAdjustContentInsets: true,
        allowFileAccess: true,
        allowUniversalAccessFromFileURLs: true,
        allowFileAccessFromFileURLs: true,
        mixedContentMode: "always",
        onMessage: this.onMessage,
        source: {
          html: this.htmlTemplate()
        },
        ref: function ref(webView) {
          return _this2.webView = webView;
        }
      }));
    }
  }]);
  return Pivot;
}(_react.default.Component);
exports.Pivot = Pivot;
Pivot.propTypes = {
  afterchartdraw: _propTypes.default.func,
  aftergriddraw: _propTypes.default.func,
  beforegriddraw: _propTypes.default.func,
  cellclick: _propTypes.default.func,
  celldoubleclick: _propTypes.default.func,
  chartclick: _propTypes.default.func,
  datachanged: _propTypes.default.func,
  dataerror: _propTypes.default.func,
  datafilecancelled: _propTypes.default.func,
  dataloaded: _propTypes.default.func,
  fieldslistclose: _propTypes.default.func,
  fieldslistopen: _propTypes.default.func,
  filterclose: _propTypes.default.func,
  filteropen: _propTypes.default.func,
  fullscreen: _propTypes.default.func,
  licenseKey: _propTypes.default.string,
  loadingdata: _propTypes.default.func,
  loadinglocalization: _propTypes.default.func,
  loadingolapstructure: _propTypes.default.func,
  loadingreportfile: _propTypes.default.func,
  localizationerror: _propTypes.default.func,
  localizationloaded: _propTypes.default.func,
  olapstructureerror: _propTypes.default.func,
  olapstructureloaded: _propTypes.default.func,
  openingreportfile: _propTypes.default.func,
  querycomplete: _propTypes.default.func,
  queryerror: _propTypes.default.func,
  ready: _propTypes.default.func,
  report: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  reportchange: _propTypes.default.func,
  reportcomplete: _propTypes.default.func,
  reportfilecancelled: _propTypes.default.func,
  reportfileerror: _propTypes.default.func,
  reportfileloaded: _propTypes.default.func,
  runningquery: _propTypes.default.func,
  unauthorizederror: _propTypes.default.func,
  update: _propTypes.default.func,
  accessibility: _propTypes.default.object
};
