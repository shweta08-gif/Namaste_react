import React from 'react';
import ReactDOM  from 'react-dom';

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

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a heading"),
    React.createElement("h1", {}, "I am another heading 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a heading"),
    React.createElement("h1", {}, "I am another heading"),
  ]),
]);

// const heading = React.createElement("h1", { id: "heading1" }, "Hello world from React!"); //returns a object
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // converts this object to h1 tag and put it in DOM
