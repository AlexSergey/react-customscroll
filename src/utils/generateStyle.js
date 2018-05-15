export default function generateStyle(css, id) {
    let head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.setAttribute('id', id);

    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}