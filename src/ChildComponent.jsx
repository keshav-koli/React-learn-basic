// import React from 'react'
// !===============props===============
//? =====receive props in function based component=====

/*
let ChildComponent = (props) => {
  console.log("Heyy I am arrow function...");
  console.log(props);

  return (
    <>
      <h2> I am child Component</h2>
      <h3> Name : {props.name}</h3>
      <h4> Age : {props.age}</h4>
      <h4>Course : {props.course}</h4>
    </>
  );
};

export default ChildComponent;
*/
/*
let ChildComponent = (props) => {
    console.log("i am child component");
    console.log(props);
    
  return (
    <>
      <h2>i am child component</h2>
      <h3>Name : {props.sname}</h3>
      {props.children}
    </>
  );
};

export default ChildComponent;
*/

// ? === props Destructuring ===
//  Example 1:
/*
let ChildComponent = props => {
  console.log(props);
  let { name, age, course } = props;
  return (
    <>
      <h2>I am ChildComponent</h2>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>Course : {course}</h3>
    </>
  );
};
export default ChildComponent;
*/

// Example 2:
/*
let ChildComponent = (props) => {
  console.log(props);
  let {
    sname,
    course,
    isMarried,
    kidsCount,
    gender,
    skills: { frontend, database, backend },
    hobbies: {
      dayTimeHobbies: { publicHobies, privateHobies },
      nightTimeHobbies: { parentKnows, parentDontKnows },
    },
    qualification: { matriculation, intermediate, graduation },
  } = props;

  return (
    <>
      <h2>I am ChildComponent</h2>
      <h3>hobbies: {privateHobies}</h3>
    </>
  );
};
export default ChildComponent;
*/

// !============Default Props============
// Example 1:
/*
let ChildComponent = (props) => {
  console.log(props);
  let {
    sname = "No name",
    age = 18,
    course = "No course",
    skills = [],
    friends = { fname: "No friend", address: "Not mentioned", Mobile: "null" },
  } = props;
  return (
    <>
      <h2>I am ChildComponent</h2>
      <h3>Name : {sname}</h3>
      <h3>Age : {age}</h3>
      <h3>Course : {course}</h3>
      <h3>
        Skills :
        {skills.map((val, index) => {
          console.log(val, "-----", index);
          return <li key={index}>{val}</li>;
        })}
      </h3>
      <h3>Friend Name : {friends.fname}</h3>
      <h3>Address : {friends.address}</h3>
      <h3> Mobile No :{friends.Mobile}</h3>
    </>
  );
};

export default ChildComponent;
*/

// ? Pure JavaScript data types
/*
let ChildComponent = (props) => {
  console.log(props);
  let {
    sname,
    age,
    isplaced,
    companyName,
    salary,
    skills,
    address: { city, state },
    dob,
    clickfn,
  } = props;
  return (
    <>
      <h2> I am child Component</h2>
      <h3>Name:{sname}</h3>
      <h3>Age:{age}</h3>
      <h3>Placed Status : {isplaced ? "Yes" : "No"}</h3>
      <h3>
        Company Name : {companyName === undefined ? "No company" : companyName}
      </h3>
      <h3>Salary : {salary === null ? "No salary" : salary}</h3>
      <h3>
        Skills :{" "}
        {skills.map((val, ind) => {
          return (
            <p key={ind}>
              SK00{ind + 1}----{val}
            </p>
          );
        })}
      </h3>
      <h3>
        Address
        <p>City :{city}</p>
        <p>State :{state}</p>
      </h3>


      <h3>Date Of Birth : {dob.toString()}</h3>
      <button onClick={clickfn}>Click Me</button>
    </>
  );
};

export default ChildComponent;
*/

// ?============props drilling===================
/*
import GrandChildComponent from "./GrandChildComponent";
let ChildComponent = (props) => {
  console.log(props);
  console.log("From ChildComponent -", props.products);

  return (
    <>
      <h2> I am child Component</h2>
      <h4>
        Link :
        <a href={props.data} target="_blank">
          Click Here
        </a>
      </h4>
      <br />
      <GrandChildComponent d={props} />
    </>
  );
};

export default ChildComponent;  
*/

// ? ========= prop types ==============
/*
import PropTypes from "prop-types";

let ChildComponent = props => {
  console.log(props);
  let { sname, course, skills } = props;
  return (
    <>
      <h2>I am ChildComponent </h2>
      <h3>Name : {sname}</h3>
      <h3>Course : {course}</h3>
      <h3>
        Skills :
        {skills.map((val, ind) => {
          return <li key={ind}>{val}</li>;
        })}
      </h3>
    </>
  );
};

ChildComponent.propTypes = {
  sname: PropTypes.string,
  age: PropTypes.number,
  course: PropTypes.string,
  skills: PropTypes.array,
  address: PropTypes.object,
  isMarried: PropTypes.bool,
};

export default ChildComponent;
*/


// ?====================Inline Css===================

// !===============Meesho Project================
import meeshoStyle from "../meeshoTask.module.css";

let Product = (props) => {
  let {data,category}=props;
  console.log(category);
  console.log(data);
  
  return (
    <>
      <h3>Category : {category}</h3>
      <section id={meeshoStyle.container}>
      {data.map((val, ind) => {
        return (
          <div key={ind} className={meeshoStyle.item}>
            <div id={meeshoStyle.imgContainer}>
            <img src={val.image} alt="product" />
            </div>
            <div id={meeshoStyle.content}>
            <h3>{val.title}</h3>
            <p>Price : {val.price}</p>
            <p>Ratings : {val.ratings}</p>
            <p>Reviews : {val.reviews}</p>
            </div>
          </div>
        );
      })}
      </section>
    </>
  );
}
export default Product;