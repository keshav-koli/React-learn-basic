/*import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = (props) => {
  console.log(props);
  let sectionStyles = {
    height: "95vh",
    width: "98vw",
    border: "solid red",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  let articleStyles = {
    border: "solid green",
    height: "70%",
    width: "30%",
  };
  let closeButton={
    position:"absolute",
    top:"0px",
    right:"0px",
    color:"red",
    fontSize:"20px",
    cursor:"pointer"

  }

  return ReactDOM.createPortal(
    <>
      <section style={sectionStyles}>
        <article style={articleStyles}>
          <h1>here you can do login...</h1>
          <button onClick={props.closeFn} style={closeButton}>skip</button>
        </article>
      </section>
    </>,
    document.getElementById("portal")
  );
};

export default PortalComponent;
*/
import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = (props) => {

  return ReactDOM.createPortal(
    <div className="absolute top-0 left-0 w-full h-full bg-black  flex justify-center items-center">
      <div className="bg-white rounded-3xl p-4 w-96 flex flex-col items-center h-[500px] absolute top-10">
        <h1 className="text-3xl font-bold m-4">Login to ZEE5</h1>
        <p className="text-gray-600 text-center mb-4 font-medium w-80 m-2">
          Login to continue enjoying uninterrupted video and personalised
          experience.
        </p>
        <div className="flex justify-center m-4">
          <button className="bg-white border border-gray-300 rounded-full px-4 py-2 mx-2">
            <i class="fa-brands fa-google"></i>
          </button>
          <button className="bg-white border border-gray-300 rounded-full px-4 py-2 mx-2">
            <i class="fa-brands fa-facebook"></i>
          </button>
          <button className="bg-white border border-gray-300 rounded-full px-4 py-2 mx-2">
            <i class="fa-brands fa-twitter"></i>
          </button>
          <button className="bg-white border border-gray-300 rounded-full px-4 py-2 mx-2">
            <i class="fa-brands fa-apple"></i>
          </button>
        </div>
        <div className="flex items-center mb-4">
            <p>---------------------</p>
          <span className="  mx-4 border border-gray-200 rounded-4xl px-2 py-1 bg-gray-50">
            or
          </span>
          <p>-----------------------</p>
        </div>
        <input
          className="w-80 border border-gray-300 rounded-lg p-2 m-2"
          placeholder="Enter email or mobile number"
          type="text"
        />
        <button className="w-80 bg-purple-500 text-gray-300 font-bold rounded-lg p-2 mt-6">
          Login
        </button>
        <p className="mt-6 text-gray-800 font-medium">
          New to ZEE5 ?
          <a className="text-purple-500 cursor-pointer ml-1">Register</a>
        </p>

        <button
          onClick={props.closeFn}
          className="fixed top-2 right-2  cursor-pointer"
        >
          ❌
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default PortalComponent;
