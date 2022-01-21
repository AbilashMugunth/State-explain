import React, { Component, useState, useEffect } from "react";

// *!Class Component STATE AND SETSTATE

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count + -1 });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.decrement()}>Decrease</button>
        Count : {this.state.count}
        <button onClick={() => this.increment()}>increase</button>
      </div>
    );
  }
}

// *!Functional component useState hook

// const Counter = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     console.log("render");
//   }, [counter]);

//   const increment = () => {
//     setCounter(counter + 1);
//   };
//   return (
//     <div>
//       Count:{counter}
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

export default Counter;

// // *!Functional component useEffect hook

// const Colorchange = () => {
//   const [colorIndex, setColorIndex] = useState(0);
//   const colors = ["blue", "green", "red", "orange"];

//   /*
//       We are performing a 'side effect' since we are working with an API.
//       We are working with the DOM, a browser API outside of React.
//     */
//   useEffect(() => {
//     document.body.style.backgroundColor = colors[colorIndex];
//   }, );
//   /* Whenever state is updated, App re-renders and useEffect runs */

//   function handleChangeColor() {
//     /* This code may look complex, but all it does is go to the next color in the 'colors' array, and if it is on the last color, goes back to the beginning */
//     const nextIndex = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
//     setColorIndex(nextIndex);
//   }

//   return <button onClick={handleChangeColor}>Change background color</button>;
// };
// export default Colorchange;
