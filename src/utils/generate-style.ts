export const generateStyle = (css: string, id: string): void => {
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");

  style.setAttribute("id", id);

  style.appendChild(document.createTextNode(css));

  head.appendChild(style);
};
