# React Custom Scroll 4.0

This is little custom scroll React component. It is very customizable and flexible component. You can customization scrollbar.

[Demo](http://natrube.net/custom-scroll/index.html)

## Features:
- Without dependency
- Very simple and flexible
- Very small size (9kb)
- Easy customization, easy api
- Keyboard bind
- Reinitialize after all mutation events
- Mobile compatibility
- Animate scrollTo feature
- min-height and max-height compatibility
- simple customizations
- hide default scrollbars in Mac
- support React-sortable-tree / React-virtualized

## Usage

### Step 1:
```
npm install react-customscroll -save
```

### Step 2:

```jsx
import CustomScroll from 'react-customscroll';
```

### Step 3:
Paste CustomScroll component inside wrapper block with height and "overflow: hidden"

For example:
```jsx
<div style={{height: '500px', overflow: 'hidden'}}>
  <CustomScroll>
    ...
  </CustomScroll>
</div>
```

Here are a few examples <strong>example/index.js</strong>

## License

MIT