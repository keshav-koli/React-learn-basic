// CONTEXT Using myContext.provider and consumer


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
                  {/* <p>Rating :{val.Rating.rate}</p> */}
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
