# React Native module for Flexmonster Pivot Table & Charts 
[![Flexmonster Pivot Table & Charts](https://s3.amazonaws.com/flexmonster/github/fm-github-cover.png)](https://flexmonster.com)


This repository holds the source code for using [Flexmonster Pivot](https://www.flexmonster.com/) in [React Native](https://facebook.github.io/react-native/) applications. 

* [Getting started](#getting-started)
* [Usage](#usage)
* [License](#license)
* [Support & feedback](#support-feedback)

## <a name="getting-started"></a>Getting Started ##

If you don’t have React Native app, you can create it by running in the console:

```bash
npm install -g expo-cli

expo init my-app --template blank
cd my-app
npm install
```
You can find more information here: [React Native: Getting Started](https://facebook.github.io/react-native/docs/getting-started)

Add Flexmonster React Native module by running in the console:

```bash
npm i react-native-flexmonster --save
```

Include `FlexmonsterReactNative` into `App.js`:

```bash
import * as FlexmonsterReactNative from 'react-native-flexmonster';
```

Insert a pivot table into `App.js`:

```bash
export default function App() {
  return (
    <View style={{ flex: 1 }}>
        <FlexmonsterReactNative.Pivot
          report="https://cdn.flexmonster.com/reports/report.json"
        />
      </View>
  );
}
```
For better user experience, we recommend setting orientation of the screen to `landscape`.

Now you are ready to run the application.
```bash
expo start
```

## <a name="usage"></a>Usage ##

Available attributes for `FlexmonsterReactNative.Pivot`:

* `report` – property to set a report. It can be inline [Report Object](https://www.flexmonster.com/api/report-object/) or URL to report JSON.
* `licenseKey` – the license key.

## <a name="license"></a>License ##

Here is [Flexmonster licensing page](https://www.flexmonster.com/pivot-table-editions-and-pricing/). We have free 30 day trial! 

Flexmonster React module is released as a MIT-licensed (free and open-source) add-on to Flexmonster Pivot.

## <a name="support-feedback"></a>Support & feedback ##

Please share your feedback or ask questions via [Flexmonster Forum](https://www.flexmonster.com/forum/).
