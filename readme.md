
# Copyright Component

 This package is used to add the copyright rights notice easily in your applications.


## Getting Started

Use the below command to add your package in your application

```
npm install sg-copyright
```
you can consume it in your application as shown below:

```
<sg-copyright></sg-copyright>
```

## Options
| Property    | Attribute   | Type                     | Description                                                 |
| ----------- | ----------- | :-----------------------:|:----------------------------------------------------------: | 
| `color`     | `color`     |  `string`                | (Optional) Used to Specify the font color, Default: Black   |
| `company`   | `company`   |  `string`                | (Optional) Used to Specify the company name                 |
| `from`      | `from`      |  `string`                | (Optional) Used to Specify the Start Year                   |
| `placement` | `placement`  | `"center" ,"left" ,"right"`   | (Optional) Align the content, Default Left Align            |
| `locale   ` | `locale   ` | `"en" ,"es"`                | (Optional) localization (en, es), Default is en             |

Eg:

```
<sg-copyright placement="center" from="2020" company="ABCD Crop" locale="en" color="red">
</sg-copyright>
```


## Usage

Now we will see how to integrate this libiary in your applications.


## Angular

Add an import to `main.js`

```
import { defineCustomElements} from '../node_modules/sg-copyright/loader';
```
And somewhere near the bottom we'll call this function.

```
defineCustomElements();
```

Next, in `app.module.ts` add the CUSTOM_ELEMENTS_SCHEMA.

```
import {CUSTOM_ELEMENTS_SCHEMA} from `@angular/core`;
```
and then

```
schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
```
Your `app.module.ts` should look like this:

```
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

Now, in `app.component.html` you utilize your new custom element. 

```
<sg-copyright placement="center" from="2020" company="ABCD Crop" locale="en" color="red"></sg-copyright>
```

### React
Now we'll add an import to `main.js`

```
import { defineCustomElements} from '../node_modules/sg-copyright/loader';
```
And somewhere near the bottom we'll call this function.

```
defineCustomElements();
```
Next, in `app.js` you utilize your new custom element
```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <sg-copyright></sg-copyright>
      </header>
    </div>
  );
}
```
### Vue
Add defineCustomElements to one of our main files. Specifically `main.js` for Vue.
```
import { defineCustomElements} from '../node_modules/sg-copyright/loader';
```
And somewhere near the bottom we'll call this function.

```
defineCustomElements();
```
Next, in `App.Vue` you consume the custom element. 
```
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <sg-copyright></sg-copyright>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
```