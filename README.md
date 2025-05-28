# React CustomScroll

**React-customscroll** is a tiny React component for scroll bar customization, without dependencies but with a lot of features.

[Demo](http://natrube.net/custom-scroll/index.html)

## Features:
- React 19 support
- TypeScript support
- Tiny size (11kb)
- Without dependencies
- Easy customization, simple api
- Native OS scroll behavior
- Cross browser
- Animate scrollTo feature
- RTL support
- Server Side Rendering support
- Scroll snap support

## Usage

### Step 1:

```
npm install react-customscroll -save
```

### Step 2:

**React-customscroll** works like native browser scroll.

You should paste the component inside the block with scrollable data.

For instance:

```jsx
import CustomScroll from 'react-customscroll';
```

```jsx
<div className="block-with-scrolling">
  <CustomScroll>
    ...long_data_here...
  </CustomScroll>
</div>
```

If block with a native browser scroll works well it will work with **React-customscroll**

---

[Examples](https://github.com/AlexSergey/react-customscroll/tree/master/example)

## License

MIT
