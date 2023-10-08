// get the root element
const root = document.getElementById("root");

// function to render the elements on this we have to pass the react dom and the root

const renderDom = (reactDom, root) => {
  const dom = document.createElement(reactDom.type);
  dom.innerHTML = reactDom.children;
  dom.setAttribute("href", reactDom.props.href);
  dom.setAttribute("target", reactDom.props.target);
  root.appendChild(dom);
};

// reactDom object
const reactDom = {
  type: "a",
  props: {
    href: "https//www.google.com",
    target: "_blank",
  },
  children: "Click me ",
};

// create a dom element

// render the elements

renderDom(reactDom, root);
