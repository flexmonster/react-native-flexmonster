"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Pivot = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeWebview = require("react-native-webview");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Pivot extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "addCalculatedMeasure", measure => {
      this.runScript("flexmonster.addCalculatedMeasure(".concat(this.stringifyParams(measure), ")"));
    });

    _defineProperty(this, "addCondition", condition => {
      this.runScript("flexmonster.addCondition(".concat(this.stringifyParams(condition), ")"));
    });

    _defineProperty(this, "clear", () => {
      this.runScript("flexmonster.clear()");
    });

    _defineProperty(this, "clearFilter", name => {
      this.runScript("flexmonster.clearFilter(".concat(this.stringifyParams(name), ")"));
    });

    _defineProperty(this, "closeFieldsList", () => {
      this.runScript("flexmonster.closeFieldsList()");
    });

    _defineProperty(this, "collapseAllData", () => {
      this.runScript("flexmonster.collapseAllData()");
    });

    _defineProperty(this, "collapseData", name => {
      this.runScript("flexmonster.collapseData(".concat(this.stringifyParams(name), ")"));
    });

    _defineProperty(this, "connectTo", params => {
      this.runScript("flexmonster.connectTo(".concat(this.stringifyParams(params), ")"));
    });

    _defineProperty(this, "dispose", () => {
      this.runScript("flexmonster.dispose()");
    });

    _defineProperty(this, "expandAllData", () => {
      this.runScript("flexmonster.expandAllData()");
    });

    _defineProperty(this, "expandData", name => {
      this.runScript("flexmonster.expandData(".concat(this.stringifyParams(name), ")"));
    });

    _defineProperty(this, "exportTo", params => {
      return this.composePromiseWithCallback("exportTo", params);
    });

    _defineProperty(this, "getAllConditions", () => {
      return this.composePromise("getAllConditions");
    });

    _defineProperty(this, "getAllHierarchies", () => {
      return this.composePromise("getAllHierarchies");
    });

    _defineProperty(this, "getAllMeasures", () => {
      return this.composePromise("getAllMeasures");
    });

    _defineProperty(this, "getCell", (rowIdx, colIdx) => {
      return this.composePromise("getCell", rowIdx, colIdx);
    });

    _defineProperty(this, "getColumns", () => {
      return this.composePromise("getColumns");
    });

    _defineProperty(this, "getCondition", name => {
      return this.composePromise("getCondition", name);
    });

    _defineProperty(this, "getFilter", name => {
      return this.composePromise("getFilter", name);
    });

    _defineProperty(this, "getFormat", name => {
      return this.composePromise("getFormat", name);
    });

    _defineProperty(this, "getMeasures", () => {
      return this.composePromise("getMeasures");
    });

    _defineProperty(this, "getMembers", name => {
      return this.composePromise("getMembers", name);
    });

    _defineProperty(this, "getOptions", () => {
      return this.composePromise("getOptions");
    });

    _defineProperty(this, "getReport", () => {
      return this.composePromise("getReport");
    });

    _defineProperty(this, "getReportFilters", () => {
      return this.composePromise("getReportFilters");
    });

    _defineProperty(this, "getRows", () => {
      return this.composePromise("getRows");
    });

    _defineProperty(this, "getSelectedCell", () => {
      return this.composePromise("getSelectedCell");
    });

    _defineProperty(this, "getSort", name => {
      return this.composePromise("getSort", name);
    });

    _defineProperty(this, "getFlatSort", () => {
      return this.composePromise("getFlatSort");
    });

    _defineProperty(this, "getXMLACatalogs", (url, dataSource) => {
      return this.composePromiseWithCallback("getXMLACatalogs", url, dataSource);
    });

    _defineProperty(this, "getXMLACubes", (url, dataSource, catalog) => {
      return this.composePromiseWithCallback("getXMLACubes", url, dataSource, catalog);
    });

    _defineProperty(this, "getXMLADataSources", url => {
      return this.composePromiseWithCallback("getXMLADataSources", url);
    });

    _defineProperty(this, "load", url => {
      this.runScript("flexmonster.load(".concat(this.stringifyParams(url), ")"));
    });

    _defineProperty(this, "openCalculatedValueEditor", () => {
      this.runScript("flexmonster.openCalculatedValueEditor()");
    });

    _defineProperty(this, "openFieldsList", () => {
      this.runScript("flexmonster.openFieldsList()");
    });

    _defineProperty(this, "openFilter", name => {
      this.runScript("flexmonster.openFilter(".concat(this.stringifyParams(name), ")"));
    });

    _defineProperty(this, "refresh", () => {
      this.runScript("flexmonster.refresh()");
    });

    _defineProperty(this, "removeAllCalculatedMeasures", () => {
      this.runScript("flexmonster.removeAllCalculatedMeasures()");
    });

    _defineProperty(this, "removeAllConditions", () => {
      this.runScript("flexmonster.removeAllConditions()");
    });

    _defineProperty(this, "removeCalculatedMeasure", name => {
      this.runScript("flexmonster.removeCalculatedMeasure(".concat(this.stringifyParams(name), ")"));
    });

    _defineProperty(this, "removeCondition", name => {
      this.runScript("flexmonster.removeCondition(".concat(this.stringifyParams(name), ")"));
    });

    _defineProperty(this, "removeSelection", () => {
      this.runScript("flexmonster.removeSelection()");
    });

    _defineProperty(this, "runQuery", query => {
      this.runScript("flexmonster.runQuery(".concat(this.stringifyParams(query), ")"));
    });

    _defineProperty(this, "save", params => {
      this.runScript("flexmonster.save(".concat(this.stringifyParams(params), ")"));
    });

    _defineProperty(this, "setFilter", (name, filter) => {
      this.runScript("flexmonster.setFilter(".concat(this.stringifyParams([name, filter]), ")"));
    });

    _defineProperty(this, "setFormat", format => {
      this.runScript("flexmonster.setFormat(".concat(this.stringifyParams(format), ")"));
    });

    _defineProperty(this, "setOptions", options => {
      this.runScript("flexmonster.setOptions(".concat(this.stringifyParams(options), ")"));
    });

    _defineProperty(this, "setReport", report => {
      this.runScript("flexmonster.setReport(".concat(this.stringifyParams(report), ")"));
    });

    _defineProperty(this, "setSort", (name, sort) => {
      this.runScript("flexmonster.setSort(".concat(this.stringifyParams([name, sort]), ")"));
    });

    _defineProperty(this, "setFlatSort", sort => {
      this.runScript("flexmonster.setFlatSort(".concat(this.stringifyParams([sort]), ")"));
    });

    _defineProperty(this, "showCharts", type => {
      this.runScript("flexmonster.showCharts(".concat(this.stringifyParams(type), ")"));
    });

    _defineProperty(this, "showGrid", () => {
      this.runScript("flexmonster.showGrid()");
    });

    _defineProperty(this, "showGridAndCharts", (chart, position) => {
      this.runScript("flexmonster.showGridAndCharts(".concat(this.stringifyParams([chart, position]), ")"));
    });

    _defineProperty(this, "sortValues", (axisName, type, tuple, measure) => {
      this.runScript("flexmonster.sortValues(".concat(this.stringifyParams([axisName, type, tuple, measure]), ")"));
    });

    _defineProperty(this, "updateData", data => {
      this.runScript("flexmonster.updateData(".concat(this.stringifyParams(data), ")"));
    });

    _defineProperty(this, "onMessage", event => {
      var messageData = JSON.parse(event.nativeEvent.data);
      var messageType = messageData.type;

      if (messageType === "event") {
        if (this.props[messageData.name] instanceof Function) this.props[messageData.name](messageData);
      } else {
        if (this._callbacks[messageData.type]) this._callbacks[messageData.type](messageData.data);
      }
    });

    _defineProperty(this, "_callbacks", {});

    _defineProperty(this, "composePromise", (callName, ...params) => {
      return new Promise(resolve => {
        this._callbacks[callName] = result => resolve(result);

        this.runScript("\n                    var result = flexmonster.".concat(callName, "(").concat(this.stringifyParams(params), ");\n                    var response = {\n                        type: \"").concat(callName, "\",\n                        data: result\n                    };\n                    window.ReactNativeWebView.postMessage(JSON.stringify(response));\n                "));
      });
    });

    _defineProperty(this, "composePromiseWithCallback", (callName, ...params) => {
      return new Promise(resolve => {
        this._callbacks[callName] = result => resolve(result);

        this.runScript("\n                    flexmonster.".concat(callName, "(\n                        ").concat(this.stringifyParams(params), ",\n                        (result) => {\n                            var response = {\n                                type: \"").concat(callName, "\",\n                                data: result\n                            };\n                            window.ReactNativeWebView.postMessage(JSON.stringify(response));\n                        }\n                    )\n                "));
      });
    });

    _defineProperty(this, "stringifyParams", params => {
      if (params instanceof Array) {
        var strings = params.map(p => {
          return "JSON.parse(`".concat(JSON.stringify(p), "`)");
        });
        return strings.join(",");
      } else {
        return "JSON.parse(`".concat(JSON.stringify(params), "`)");
      }
    });

    _defineProperty(this, "runScript", scriptStr => {
      this.webView.injectJavaScript("(function() { ".concat(scriptStr, " })();"));
    });

    _defineProperty(this, "registerEvents", () => {
      var eventList = ["afterchartdraw", "aftergriddraw", "beforegriddraw", "cellclick", "chartclick", "celldoubleclick", "datachanged", "dataerror", "datafilecancelled", "dataloaded", "drillthroughclose", "drillthroughopen", "exportcomplete", "exportstart", "fieldslistclose", "fieldslistopen", "filterclose", "filteropen", "loadingdata", "loadinglocalization", "loadingolapstructure", "loadingreportfile", "localizationerror", "localizationloaded", "olapstructureerror", "olapstructureloaded", "openingreportfile", "printcomplete", "printstart", "querycomplete", "queryerror", "ready", "reportchange", "reportcomplete", "reportfilecancelled", "reportfileerror", "runningquery", "update"];
      var strings = eventList.map(eventName => {
        if (this.props[eventName]) {
          return "\n                    flexmonster.on('".concat(eventName, "', function (eventData) {\n                        var response = {\n                            type: \"event\",\n                            name: \"").concat(eventName, "\",\n                            data: eventData\n                        };\n                        window.ReactNativeWebView.postMessage(JSON.stringify(response));\n                    });\n                    ");
        }
      });
      return strings.join("");
    });

    _defineProperty(this, "htmlTemplate", () => {
      return "\n        <!DOCTYPE html>\n        <html>\n\n        <head>\n            <title>Flexmonster Pivot Table & Charts</title>\n            <meta charset=\"utf-8\" />\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n            <link href=\"https://cdn.flexmonster.com/flexmonster.min.css\" rel=\"stylesheet\">\n            <script src=\"https://cdn.flexmonster.com/toolbar/flexmonster.toolbar.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/flexmonster.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/d3.v3.min.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/canvg.min.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/html2canvas.min.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/jspdf.min.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/promise.min.js\"></script>\n            <script src=\"https://cdn.flexmonster.com/lib/sha1.min.js\"></script>\n        </head>\n\n        <body style=\"margin:0; padding:0; display: flex; height: 100vh;\">\n\n            <div id=\"pivot-container\"></div>\n            <script>\n                new Flexmonster({\n                    container: \"#pivot-container\",\n                    componentFolder: \"https://cdn.flexmonster.com/\",\n                    toolbar: true,\n                    height: \"100%\",\n                    width: \"100%\",\n                    licenseKey: '".concat(this.props.licenseKey === undefined ? "" : this.props.licenseKey, "',\n                    report: JSON.parse('").concat(JSON.stringify(this.props.report), "')\n                });\n                ").concat(this.registerEvents(), "\n            </script>\n        </body>\n\n        </html>\n    ");
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    this.dispose();
  }

  render() {
    return _react.default.createElement(_reactNative.View, {
      style: {
        flex: 1
      }
    }, _react.default.createElement(_reactNativeWebview.WebView, {
      style: {
        flex: 1,
        backgroundColor: 'transparent'
      },
      originWhitelist: ['*'],
      useWebkit: true,
      javaScriptEnabled: true,
      domStorageEnabled: true,
      mixedContentMode: "compatibility",
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
      ref: webView => {
        this.webView = webView;
      }
    }));
  }

}

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
  update: _propTypes.default.func
};
var _default = Pivot;
exports.default = _default;