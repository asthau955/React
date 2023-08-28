import React from 'react'
import ReactDOM from 'react-dom/client';
const heading = React.createElement("h1", {id: "heading"}, "Hello World!")

// nested html tags
const parent = React.createElement("div", {id: "parent"}, React.createElement("h1", {}, "I am a h1 tag"))
/**
 * <div>
 *  <div id="parent">
 * <h1>"I am a h1 tag"</h1>
 * </div>
 * </div>
 */

// sibling html tags
const parent1 = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "I am a h1 tag"),
  React.createElement("h2", {}, "I am a h2 tag"),
]);
/**
 * <div>
 *  <div id="parent">
 * <h1>"I am a h1 tag"</h1>
 * <h2>"I am a h2 tag"</h2>
 * </div>
 * </div>
 */

// complex html tags
const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);
  /**
   * <div id="parent">
   *  <div id="child1">
   * <h1>"I am a h1 tag"</h1>
   * <h2>"I am a h2 tag"</h2>
   * </div>
   *  <div id="child2">
   * <h1>"I am a h1 tag"</h1>
   * <h2>"I am a h2 tag"</h2>
   * </div>
   * </div>
   */


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent3)