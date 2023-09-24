import React from "react"



// function App (){
//   const [counter, updatevalue] = React.useState(0)
//   return(
//     <div>
//       <p>Counter: {counter}</p>
//       <div>
//          <button onClick={()=> updatevalue(counter+1)}>INC</button>
//          <button onClick={()=> updatevalue(counter - 1)}>DEC</button>
//       </div>
//     </div>
    
//   )
// }

// export default App

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App
