// CONTEXT Using myContext.provider and consumer
/*
import { MyContext } from "./App";
const ChildComponentA = () => {
  return (
    <>
      <h2>i am ChildComponentA</h2>
      <MyContext.Consumer>
        { (data)=>{
          console.log(data);
          return (
            <>
            <h2>Products</h2>
            {data.map((val)=>{
              console.log(val);
              return(
                <div key={val.id}>
                  <p>Title :{val.title}</p>
                  <p>category :{val.category}</p>
                  <p>Price :{val.Price}</p>
                  <hr/>
                </div>
              )
            })}
            </>
          )
        } 
        
        }
      </MyContext.Consumer>
    </>
  );
};
export default ChildComponentA;
*/
// ! =================== HOC =======================
/*
import React from "react";
import HOC from "./HOC";

const ChildComponentA = (props) => {
  console.log("ChildComponentA");
  console.log(props);

  return (
    <>
      <h2>I am ChildComponentA</h2>
      <h3>Id : {props.id}</h3>
      <h3>Name : {props.sname}</h3>
      <h3>Age : {props.age}</h3>
      <h3>Course : {props.course}</h3>
    </>
  );
};

export default HOC(ChildComponentA);
*/

//? ===============Counter Task using HO==================
/*
import React from "react";
import HOC from "./HOC";
const ChildComponentA = (props) => {
  return (
    <div>
      <h3>I am ChildComponent A</h3>
      <h2>Counter -: {props.counter}</h2>
      <button onClick={props.handleIncrement}>Increment</button>
      <button onClick={props.handleReset}>Reset</button>
      <button onClick={props.handleDecrement}>Decrement</button>
    </div>
  );
};

export default HOC(ChildComponentA);
*/
