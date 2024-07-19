import './App.css';
import React, { 
  //Suspense,
   useState } from 'react';
//import Counter from './components/Counter';
import TicToc from './components/games/tictok/TicToc';
//const MyComponent = React.lazy(()=> import("./components/MyComponent"))
function App() {
  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Suspense fallback={<p>components loading......</p>}>
        <MyComponent count={counter}/>
        </Suspense> 
        <Counter></Counter>*/}
        <TicToc></TicToc>
      
        <button onClick={()=>{
          setCounter(counter+1)
        }}>Order</button>
        
         
      </header>
    </div>
  );
}

export default App;
