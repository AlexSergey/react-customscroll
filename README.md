# React Custom Scroll v2

This is little component for custom scroll in React. It is very customizable and flexible component. In version 2 you can customization scrollbar

[Demo](http://natrube.net/custom-scroll/index.html)

## Features:
- Without dependency
- Very simple and flexible
- Very small size (9kb for JS)
- Easy customization, easy api
- Keyboard bind
- Reinitialize after all mutation events
- Mobile compatibility
- Animate scrollTo feature
- min-height and max-height compatibility
- simple customizations

## How usage

### Step 1:
```
npm install react-customscroll -save
```

### Step 2:

Inject component on your page:
```jsx
import CustomScroll from 'react-customscroll';
```

### Step 3:
Paste CustomScroll component inside wrapper block with height and overlow: hidden
For example:
```jsx
<div style={{height: '500px', overflow: 'hidden'}}>
  <CustomScroll>
    ...
  </CustomScroll>
</div>
```
See more examples in <strong>example/index.html</strong>

## License

MIT