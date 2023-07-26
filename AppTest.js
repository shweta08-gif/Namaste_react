import React from "react";
import ReactDOM from "react-dom";

//React Element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is a heading"
);

console.log(heading)

//JSX (transpiled before it reaches the JS engine) - BY PARCEL - Babel

//JSX => React.CreateElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1>Namaste React using JSX 🚀 </h1>

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)

/**
 *
 *
 * <div id="parent">
 *      <div id= "child1">
 *          <h1>I am a heading</h1>
 *          <h2>I am another heading</h2>
 *      </div>
 * <div id= "child2">
 *          <h1>I am a heading</h1>
 *          <h2>I am another heading</h2>
 *      </div>
 * </div>
 *
 *
 *
 *
 *
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am a heading"),
//     React.createElement("h1", {}, "I am another heading 1"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am a heading"),
//     React.createElement("h1", {}, "I am another heading"),
//   ]),
// ]);

// // const heading = React.createElement("h1", { id: "heading1" }, "Hello world from React!"); //returns a object
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent); // converts this object to h1 tag and put it in DOM
