# React Custom Scroll

This is little component for custom scroll in React. It is very customizable and flexible component.

## Features:
- Without dependency
- Very simple and flexible
- Very small size (8kb for JS / 1kb - CSS)
- Easy customization, easy api
- Keyboard bind
- Reinitialize after all mutation events
- Mobile compatibility
- Animate scrollTo feature
- min-height and max-height compatibility

[Example](http://natrube.net/custom-scroll/index.html)

## How usage

### Step 1:
<pre>npm install react-customscroll -save</pre>

### Step 2:

Inject component on your page:
import 'react-customscroll/dist/styles.css';
import CustomScroll from 'react-customscroll';

### Step 3:
Paste CustomSCroll component inside wrapper block with height and overlow: hidden
For example:
```
<div style={{height: '500px', overflow: 'hidden'}}>
  <CustomScroll>
    ...
  </CustomScroll>
</div>
```