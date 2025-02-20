// CONTEXT Using myContext.provider and consumer
/*
import { useContext } from "react";
import { MyContext } from "./App";

const ChildComponentB = () => {
  let data = useContext(MyContext);
  console.log(data);

  return (
    <>
      <h2>i am ChildComponentB</h2>
        <h2>Products</h2>
        {data.map((val) => {
          console.log(val);
          return (
            <div key={val.id}>
              <p>Title :{val.title}</p>
              <p>category :{val.category}</p>
              <p>Price :{val.Price}</p>
             
              <hr />
            </div>
          );
        })}
      </>
  );
};
export default ChildComponentB;
*/
// ! =================== HOC =======================
/*
import React from "react";
import HOC from "./HOC";

const ChildComponentB = (props) => {
  console.log("ChildComponentB");
  console.log(props);

  return (
    <>
      <h2>I am ChildComponentB</h2>
      <h3>Id : {props.id}</h3>
      <h3>Name : {props.sname}</h3>
      <h3>Age : {props.age}</h3>
      <h3>Course : {props.course}</h3>
    </>
  );
};

export default HOC(ChildComponentB);
*/
//? ===============Counter Task using HO==================
/*
import React from "react";
import HOC from "./HOC";

const ChildComponentB = (props) => {
  return (
    <div>
      <h3>I am ChildComponentB</h3>
      <h2>Counter -: {props.counter}</h2>
      <button onClick={props.handleIncrement}>Increment</button>
      <button onClick={props.handleReset}>Reset</button>
      <button onClick={props.handleDecrement}>Decrement</button>
    </div>
  );
};

export default HOC(ChildComponentB);
*/
