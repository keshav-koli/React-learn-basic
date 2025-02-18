// CONTEXT Using myContext.provider and consumer

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
              {/* <p>Rating :{val.Rating.rate}</p> */}
              <hr />
            </div>
          );
        })}
      </>
  );
};
export default ChildComponentB;
