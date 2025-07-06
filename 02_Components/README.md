What is a React Component?
A component in React is a JavaScript function or class that optionally accepts props (inputs) and returns React elements (what you see on the screen).


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
🔸 Types of React Components
1. Functional Components (Modern & Preferred)
Stateless or Stateful (with hooks)

Simple JavaScript functions


function MyComponent() {
  return <div>This is a functional component</div>;
}
With props:


function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
With state (using useState):


import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  <!-- return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  ); -->
}
2. Class Components (Older)
Use extends React.Component

Have lifecycle methods like componentDidMount


import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return <div>This is a class component</div>;
  }
}
🔸 Key Concepts in React Components
✅ 1. JSX (JavaScript XML)
JSX lets you write HTML-like syntax in JavaScript.


return <h1>Hello, world!</h1>;
✅ 2. Props (Properties)
Props are read-only inputs to a component.

Passed from parent to child.


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
Used like:


<Welcome name="Shahzil" />
✅ 3. State
State is mutable and local to the component.

Managed using useState (in functional components) or this.state (in class components).


const [count, setCount] = useState(0);
✅ 4. Lifecycle Methods (Class) / Hooks (Function)
Hooks manage component behavior over time.

Common React Hooks:
Hook	Purpose
useState()	Manage local component state
useEffect()	Run side effects (e.g., API calls)
useContext()	Access context values
useRef()	Reference DOM elements or values
useReducer()	Manage complex state

✅ 5. Component Composition
You can combine components to build complex UIs.

function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}
✅ 6. Controlled vs Uncontrolled Components
Controlled: Input form elements controlled via React state.

Uncontrolled: Input elements manage their own state (using refs).

🔸 Example of Full Functional Component

function Profile({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage:
<Profile name="Shahzil" age={22} />
🔸 Summary Table
Concept	Functional Component	Class Component
State	useState()	this.state
Lifecycle	useEffect()	componentDidMount() etc.
Simpler Syntax	✅	❌
Performance	Better with hooks	Slightly heavier
Current Usage	Recommended	Legacy / Rare in new apps