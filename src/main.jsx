import React from 'react'
import ReactDom from "react-dom/client"
import App from './App';


// console.log(React); // This is responsible for all react inbuilts functinns
// console.log(ReactDom);// This is responsible of rendering the react content into DOM.

// To create React Root :
// Syntax: ReactDom.createRoot(container Node)
let root=ReactDom.createRoot(document.getElementById("root"));
// console.log(root);


//? To render content into the container
// syntax: reactRoot.render( content )
// render method will allow 1. strings ,  2. JSX Elements , 3. Components
// root.render("Hello world !!!"); //string
// root.render(<h1>hello world !!!</h1>)// jsx element
// root.render(<App> </App>);//component
root.render(<App/>);