import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export class Pivot extends React.Component {

    shouldComponentUpdate() {
        return false;
    }
    componentWillUnmount() {
        this.dispose();
    }

    addCalculatedMeasure = (measure) => {
        this.runScript(`flexmonster.addCalculatedMeasure(${this.stringifyParams(measure)})`);
    }
    addCondition = (condition) => {
        this.runScript(`flexmonster.addCondition(${this.stringifyParams(condition)})`);
    }
    clear = () => {
        this.runScript(`flexmonster.clear()`);
    }
    clearFilter = (name) => {
        this.runScript(`flexmonster.clearFilter(${this.stringifyParams(name)})`);
    }
    closeFieldsList = () => {
        this.runScript(`flexmonster.closeFieldsList()`);
    }
    collapseAllData = () => {
        this.runScript(`flexmonster.collapseAllData()`);
    }
    collapseData = (name) => {
        this.runScript(`flexmonster.collapseData(${this.stringifyParams(name)})`);
    }
    connectTo = (params) => {
        this.runScript(`flexmonster.connectTo(${this.stringifyParams(params)})`);
    }
    dispose = () => {
        this.runScript(`flexmonster.dispose()`);
    }
    expandAllData = (withAllChildren, type) => {
        this.runScript(`flexmonster.expandAllData(${this.stringifyParams([withAllChildren, type])})`);
    }
    expandData = (name) => {
        this.runScript(`flexmonster.expandData(${this.stringifyParams(name)})`);
    }
    exportTo = (params) => {
        return this.composePromiseWithCallback("exportTo", params);
    }
    getAllConditions = () => {
        return this.composePromise("getAllConditions");
    }
    getAllHierarchies = () => {
        return this.composePromise("getAllHierarchies");
    }
    getAllMeasures = () => {
        return this.composePromise("getAllMeasures");
    }
    getCell = (rowIdx, colIdx) => {
        return this.composePromise("getCell", rowIdx, colIdx);
    }
    getColumns = () => {
        return this.composePromise("getColumns");
    }
    getCondition = (name) => {
        return this.composePromise("getCondition", name);
    }
    getFilter = (name) => {
        return this.composePromise("getFilter", name);
    }
    getFormat = (name) => {
        return this.composePromise("getFormat", name);
    }
    getMeasures = () => {
        return this.composePromise("getMeasures");
    }
    getMembers = (name) => {
        return this.composePromise("getMembers", name);
    }
    getOptions = () => {
        return this.composePromise("getOptions");
    }
    getReport = () => {
        return this.composePromise("getReport");
    }
    getReportFilters = () => {
        return this.composePromise("getReportFilters");
    }
    getRows = () => {
        return this.composePromise("getRows");
    }
    getSelectedCell = () => {
        return this.composePromise("getSelectedCell");
    }
    getSort = (name) => {
        return this.composePromise("getSort", name);
    }
    getFlatSort = () => {
        return this.composePromise("getFlatSort");
    }
    getXMLACatalogs = (url, dataSource) => {
        return this.composePromiseWithCallback("getXMLACatalogs", url, dataSource);
    }
    getXMLACubes = (url, dataSource, catalog) => {
        return this.composePromiseWithCallback("getXMLACubes", url, dataSource, catalog);
    }
    getXMLADataSources = (url) => {
        return this.composePromiseWithCallback("getXMLADataSources", url);
    }
    load = (url) => {
        this.runScript(`flexmonster.load(${this.stringifyParams(url)})`);
    }
    on = (eventName, callback) => {
        this._events[eventName] = callback;
    }
    off = (eventName) => {
        this._events[eventName] = false;
    }
    openCalculatedValueEditor = () => {
        this.runScript(`flexmonster.openCalculatedValueEditor()`);
    }
    openFieldsList = () => {
        this.runScript(`flexmonster.openFieldsList()`);
    }
    openFilter = (name) => {
        this.runScript(`flexmonster.openFilter(${this.stringifyParams(name)})`);
    }
    refresh = () => {
        this.runScript(`flexmonster.refresh()`);
    }
    removeAllCalculatedMeasures = () => {
        this.runScript(`flexmonster.removeAllCalculatedMeasures()`);
    }
    removeAllConditions = () => {
        this.runScript(`flexmonster.removeAllConditions()`);
    }
    removeCalculatedMeasure = (name) => {
        this.runScript(`flexmonster.removeCalculatedMeasure(${this.stringifyParams(name)})`);
    }
    removeCondition = (name) => {
        this.runScript(`flexmonster.removeCondition(${this.stringifyParams(name)})`);
    }
    removeSelection = () => {
        this.runScript(`flexmonster.removeSelection()`);
    }
    runQuery = (query) => {
        this.runScript(`flexmonster.runQuery(${this.stringifyParams(query)})`);
    }
    save = (params) => {
        this.runScript(`flexmonster.save(${this.stringifyParams(params)})`);
    }
    setFilter = (name, filter) => {
        this.runScript(`flexmonster.setFilter(${this.stringifyParams([name, filter])})`);
    }
    setFormat = (format) => {
        this.runScript(`flexmonster.setFormat(${this.stringifyParams(format)})`);
    }
    setOptions = (options) => {
        this.runScript(`flexmonster.setOptions(${this.stringifyParams(options)})`);
    }
    setReport = (report) => {
        this.runScript(`flexmonster.setReport(${this.stringifyParams(report)})`);
    }
    setSort = (name, sort) => {
        this.runScript(`flexmonster.setSort(${this.stringifyParams([name, sort])})`);
    }
    setFlatSort = (sort) => {
        this.runScript(`flexmonster.setFlatSort(${this.stringifyParams([sort])})`);
    }
    showCharts = (type) => {
        this.runScript(`flexmonster.showCharts(${this.stringifyParams(type)})`);
    }
    showGrid = () => {
        this.runScript(`flexmonster.showGrid()`);
    }
    showGridAndCharts = (chart, position) => {
        this.runScript(`flexmonster.showGridAndCharts(${this.stringifyParams([chart, position])})`);
    }
    sortValues = (axisName, type, tuple, measure) => {
        this.runScript(`flexmonster.sortValues(${this.stringifyParams([axisName, type, tuple, measure])})`);
    }
    updateData = (data) => {
        this.runScript(`flexmonster.updateData(${this.stringifyParams(data)})`);
    }
    scrollToRow = (rowIdx) => {
        this.runScript(`flexmonster.scrollToRow(${this.stringifyParams(rowIdx)})`);
    }
    scrollToColumn = (colIdx) => {
        this.runScript(`flexmonster.scrollToColumn(${this.stringifyParams(colIdx)})`);
    }

    onMessage = event => {
        var messageData = JSON.parse(event.nativeEvent.data);
        var messageType = messageData.type;
        if (messageType === "event") {
            if (this.props[messageData.name] instanceof Function) {
                if (this._events[messageData.name] !== false) {
                    this.props[messageData.name](messageData.data);
                }
            } else if (this._events[messageData.name] instanceof Function) {
                this._events[messageData.name](messageData.data);
            }
        } else {
            if (this._callbacks[messageData.type]) this._callbacks[messageData.type](messageData.data);
        }
    }

    _events = {};
    _callbacks = {};
    composePromise = (callName, ...params) => {
        return new Promise(
            resolve => {
                this._callbacks[callName] = result => resolve(result);
                this.runScript(`
                    var result = flexmonster.${callName}(${this.stringifyParams(params)});
                    var response = {
                        type: "${callName}",
                        data: result
                    };
                    window.ReactNativeWebView.postMessage(JSON.stringify(response));
                `);
            }
        );
    }
    composePromiseWithCallback = (callName, ...params) => {
        return new Promise(
            resolve => {
                this._callbacks[callName] = result => resolve(result);
                this.runScript(`
                    flexmonster.${callName}(
                        ${this.stringifyParams(params)},
                        (result) => {
                            var response = {
                                type: "${callName}",
                                data: result
                            };
                            window.ReactNativeWebView.postMessage(JSON.stringify(response));
                        }
                    )
                `);
            }
        );
    }

    stringifyParams = params => {
        if (params instanceof Array) {
            var strings = params.map(
                p => {
                    return `JSON.parse(\`${JSON.stringify(p)}\`)`;
                }
            );
            return strings.join(",");
        } else {
            return `JSON.parse(\`${JSON.stringify(params)}\`)`;
        }
    }
    runScript = scriptStr => {
        this.webView.injectJavaScript(
            `(function() { ${scriptStr} })();`
        );
    }

    registerEvents = () => {
        var eventList = [
            "afterchartdraw",
            "aftergriddraw",
            "beforegriddraw",
            "cellclick",
            "chartclick",
            "celldoubleclick",
            "datachanged",
            "dataerror",
            "datafilecancelled",
            "dataloaded",
            "drillthroughclose",
            "drillthroughopen",
            "exportcomplete",
            "exportstart",
            "fieldslistclose",
            "fieldslistopen",
            "filterclose",
            "filteropen",
            "loadingdata",
            "loadinglocalization",
            "loadingolapstructure",
            "loadingreportfile",
            "localizationerror",
            "localizationloaded",
            "olapstructureerror",
            "olapstructureloaded",
            "openingreportfile",
            "printcomplete",
            "printstart",
            "querycomplete",
            "queryerror",
            "ready",
            "reportchange",
            "reportcomplete",
            "reportfilecancelled",
            "reportfileerror",
            "runningquery",
            "unauthorizederror",
            "update"
        ];
        var strings = eventList.map(
            eventName => {
                // if (this.props[eventName]) {
                return `
                    flexmonster.on('${eventName}', function (eventData) {
                        var response = {
                            type: "event",
                            name: "${eventName}",
                            data: eventData
                        };
                        window.ReactNativeWebView.postMessage(JSON.stringify(response));
                    });
                    `
                //  }
            }
        );
        return strings.join("");
    }
    htmlTemplate = () => {
        return (
            `
        <!DOCTYPE html>
        <html>

        <head>
            <title>Flexmonster Pivot Table & Charts</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.flexmonster.com/flexmonster.min.css" rel="stylesheet">
            <script src="https://cdn.flexmonster.com/toolbar/flexmonster.toolbar.js"></script>
            <script src="https://cdn.flexmonster.com/flexmonster.js"></script>
            <script src="https://cdn.flexmonster.com/lib/d3.v3.min.js"></script>
            <script src="https://cdn.flexmonster.com/lib/canvg.min.js"></script>
            <script src="https://cdn.flexmonster.com/lib/html2canvas.min.js"></script>
            <script src="https://cdn.flexmonster.com/lib/jspdf.min.js"></script>
            <script src="https://cdn.flexmonster.com/lib/promise.min.js"></script>
            <script src="https://cdn.flexmonster.com/lib/sha1.min.js"></script>
        </head>

        <body style="margin:0; padding:0; display: flex; height: 100vh;">

            <div id="pivot-container"></div>
            <script>
                new Flexmonster({
                    container: "#pivot-container",
                    componentFolder: "https://cdn.flexmonster.com/",
                    toolbar: true,
                    height: "100%",
                    width: "100%",
                    licenseKey: '${this.props.licenseKey === undefined ? "" : this.props.licenseKey}',
                    report: JSON.parse('${JSON.stringify(this.props.report)}'),
                    accessibility: JSON.parse('${JSON.stringify(this.props.accessibility || {})}')
                });
                ${this.registerEvents()}
            </script>
        </body>

        </html>
    `);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView style={{ flex: 1, backgroundColor: 'transparent' }}
                    originWhitelist={['*']}
                    useWebkit
                    javaScriptEnabled
                    domStorageEnabled
                    scrollEnabled={false}
                    automaticallyAdjustContentInsets
                    allowFileAccess={true}
                    allowUniversalAccessFromFileURLs={true}
                    allowFileAccessFromFileURLs={true}
                    mixedContentMode="always"
                    onMessage={this.onMessage}
                    source={{ html: this.htmlTemplate() }}
                    ref={webView => this.webView = webView}
                />
            </View>
        );
    }
}
Pivot.propTypes = {
    afterchartdraw: PropTypes.func,
    aftergriddraw: PropTypes.func,
    beforegriddraw: PropTypes.func,
    cellclick: PropTypes.func,
    celldoubleclick: PropTypes.func,
    chartclick: PropTypes.func,
    datachanged: PropTypes.func,
    dataerror: PropTypes.func,
    datafilecancelled: PropTypes.func,
    dataloaded: PropTypes.func,
    fieldslistclose: PropTypes.func,
    fieldslistopen: PropTypes.func,
    filterclose: PropTypes.func,
    filteropen: PropTypes.func,
    fullscreen: PropTypes.func,
    licenseKey: PropTypes.string,
    loadingdata: PropTypes.func,
    loadinglocalization: PropTypes.func,
    loadingolapstructure: PropTypes.func,
    loadingreportfile: PropTypes.func,
    localizationerror: PropTypes.func,
    localizationloaded: PropTypes.func,
    olapstructureerror: PropTypes.func,
    olapstructureloaded: PropTypes.func,
    openingreportfile: PropTypes.func,
    querycomplete: PropTypes.func,
    queryerror: PropTypes.func,
    ready: PropTypes.func,
    report: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    reportchange: PropTypes.func,
    reportcomplete: PropTypes.func,
    reportfilecancelled: PropTypes.func,
    reportfileerror: PropTypes.func,
    reportfileloaded: PropTypes.func,
    runningquery: PropTypes.func,
    unauthorizederror: PropTypes.func,
    update: PropTypes.func,
    accessibility: PropTypes.object
}