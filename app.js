import React from 'react'
import ReactDOM from 'react-dom/client';

// react element
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


  /**
   * JSX - an extension to js - HTML like syntax // code is transpiled before it reaches to JS engine
   * traspiled - conversion into browser understandable code
   * transpilation is done using Parcel (parcel needs babel for this operation)
   * html tag class === jsx className
   * jsx attributes are in camel case ex: tabIndex
   */

const jsxHeading = (
  <h1 id="heading" className="heading" tabIndex="5">
    Hello World JSX!
  </h1>
); 


/**
 * React components - 1) class based components 2 )functional components
 * function which returns react element or JSX code is a functional component
 */


const HeadingComponent = () =>{ return <h1>Functional Component</h1> }; 

/**
 * or
 * const headingComponent = () =>{ <h1>Heading Component</h1> }; 
 */


// component composition - component in side another component 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)

// root.render(jsxHeading)
