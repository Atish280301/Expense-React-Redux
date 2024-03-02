import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from './Action/Action';
const App = () => {
  const myState = useSelector(state=> state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>React Redux</h1>
      <div style={{"display" : "flex"}}>
        <button style={{"margin":"10px"}} onClick={()=>{
          if(myState > 0){
            dispatch(DECREMENT())
          }
        }}>-</button>
        <p>{myState}</p>
        <button style={{"margin":"10px"}} onClick={()=>dispatch(INCREMENT())}>+</button>
      </div>
    </>
  );
}
export default App;