// ! =============== component ===============
/*
Component is block of code
Rules:
    1. Component Name should starts with uppercase.
        Ex: App.jsx , Product.jsx , Card.jsx
    2. Component can be saved with .jsx or .js extension.
    3. To use this component in other components we have to use an element
       Ex: <App> </App>
       Ex: <App />

Components are classified into 2 ways
1. Class based Component
2. Function based compoent
*/

// ? ======= Class based Components =============
/*
import { Component } from "react";

class App extends Component {
  render() {
    console.log("Hii Hello how are you????");
    return <h1>Hello , I am Class Based Component</h1>;
  }
}
export default App;
*/

// ? ======= Function based Components =============
// & Case 1:
/*
function App() {
  return <h1>Hii, I am Function based Component</h1>;
}
export default App;
*/

// & Case 2:
/*
export default function () {
  console.log("Hello world");
  return <h1>Hii, I am function based Component (Anonymous)</h1>;
}
*/

// & Case 2.1:
/*
let App = function () {
  console.log("Hello world");
  return <h1>Hii, I am function based Component (Anonymous)</h1>;
};
export default App;
*/

// & Case 3:
/*
export default () => {
  console.log("Heyy I am arrow function...");
  return <h1>Hii, I am function based component (Arrow function)</h1>;
};
*/

// & Case 3.1:
/*
let App = () => {
  console.log("Heyy I am arrow function...");
  return <h1>Hii, I am function based component (Arrow function)</h1>;
};
export default App;
*/

// & Case 4:
// we should not return more than one element.
// so we have to keep all our elements in one parent element.
/*
let App = () => {
  console.log("Heyy I am arrow function...");
    return (
      <div>
        <h1>Hii, I am function based component (Arrow function)</h1>
        <h2>Bye, I am function based component (Arrow function)</h2>
      </div>
    );
};
export default App;
*/

// & Case 5:
// In the above an unwanted div is created
// to avoid we can use React.Fragment
// React.Fragment in one empty element.
/*
import React from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <React.Fragment>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </React.Fragment>
  );
};
export default App;
*/

// & Case 5.1 :
/*
import { Fragment } from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <Fragment>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </Fragment>
  );
};
export default App;
*/

// & Case 5.2:
// We can use <React.Fragment></React.Fragment> as <></>.
/*
import React from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </>
  );
};
export default App;
*/

// !=============== JSX=========================
/*
  JSX Stands for JavaScript XML
  JSX Looks similar to HTML but stricter than HTML
  It follows some rules
*/

// ? RULE 1
// JSX will return only one element
// we can use one parent element /Fragment
/*
let App = () => {
  return (
    <>
      <h1>i am h1 tag</h1>
      <h1>i am h1 tag</h1>
      <h1>i am h1 tag</h1>
      <h1>i am h1 tag</h1>
    </>
  );
};
export default App;
*/

// ? RULE 2
// JSX elements are case sensitive
/*
let App = () => {
  console.log("I am a component");
  return <H1> I am Component</H1>//!ERROR
};

export default App;

*/

// ? Rule 3
// If we want we can use js variable into html by using expression
// js---html==>return
// html ---js==>{}

// ? Rule 4
// Every element should be unique
// for unique reference we have to use key props
/*
let App = () => {
  let sname = "ram";
  let age = 25;
  let course = "Java Full stack";
  let skills = ["html", "css", "js", "react", "tailwind CSS"];

  return (
    <>
      <h1>my self {sname}</h1>
      <h2>my age is {age}</h2>
      <h2>I opted for {course}</h2>
      <h2>
        my skills are{" "}
        {skills.map((val, idx) => {
          return <li key={idx} type="circle">{val}</li>;
        })}
      </h2>
    </>
  );
};
export default App;
*/

// ?Rule 5
// in JSX we should follow lowerCammelCase
// ex :onClick,onMouseOver

// ? Rule 6
// common words from html and javascript will change in jsx
// ex : class-->classNmae , for---> htmlFor

// ? Rule 7
// All element should be closed
//
/*
let App = () => {
  let sname = "suraj";
  return (
    <>
      <h1>I am a component</h1>
      <h1>I am {sname}</h1>
      <button
        onClick={() => {
          alert("clicked on button");
        }}
      >
        clicked me
      </button>
      <br />
      <button
        onMouseOver={() => {
          console.log("hovered on button");
        }}
      >
        hover me
      </button>

      <form>
        <label htmlFor="name">User Name :</label>
        <input type="text" name="" id="name" />
        <br />
        <label htmlFor="email">User Email :</label>
        <input type="email" name="" id="email" />
        <br />
        <br />
        <br />

        <section id="mainContainer">
        <div className="demo"> item 1</div>
        <div className="demo"> item 2</div>
        <div className="demo"> item 3</div>
        <div className="demo"> item 4</div>

        </section>
      </form>
    </>
  );
};

export default App;
*/

// !=============== Props=========================
/*
In short we call properties as props
props are used to share data between components
*/

// ?=====passing props=========

/*
import ChildComponent from "./ChildComponent";

let App = () => {
  console.log("i am app component");
  
  return (
    <>
      <h1>I am Parent Component</h1>
      <ChildComponent name="ram" age="25" course="React" ></ChildComponent>
      <ChildComponent name="sam" age="26" course="Angular" ></ChildComponent>
      <ChildComponent name="tim" age="27" course="Vue" ></ChildComponent>
    </>
  );
}

export default App;
*/

/*
import ChildComponent from "./ChildComponent";
let App=()=>{
  return(
    <>
    <h1>I am Parent Component</h1>
    <ChildComponent sname="ram" >
    <h3>i am child 1.1</h3>
    <h3>i am child 1.2</h3>
    <h3>i am child 1.3</h3>

    </ChildComponent>
    <ChildComponent sname="sam" >
    <h3>i am child 2.1</h3>
    <h3>i am child 2.2</h3>
    <h3>i am child 2.3</h3>


    </ChildComponent>
    </>
  )
}
export default App;

*/
// ? === props Destructuring ===
//  Example 1:
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent name="Ekansh" age={20} course="React JS" />
      <ChildComponent name="Prabal" age={22} course="Node JS" />
      <ChildComponent name="Shivani" age={22} course="Express JS" />
    </>
  );
};
export default App;
*/

//  Example 2:
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  let sname = "Nazme";
  let course = "React JS";
  let isMarried = true;
  let kidsCount = null;
  let gender = "Male";

  let skills = {
    frontend: ["html", "css", "js", "Reactjs"],
    database: ["sql", "plsql", "mongodb"],
    backend: ["pythoooonnn", "jooovaaa", "jovaScript", "Djangoooooo"],
  };

  let hobbies = {
    dayTimeHobbies: {
      publicHobies: "Reading",
      privateHobies: "Snatching",
    },
    nightTimeHobbies: {
      parentKnows: "Marvals",
      parentDontKnows: "betting",
    },
  };

  let qualification = {
    matriculation: 85,
    intermediate: 82,
    graduation: 85,
  };

  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname={sname}
        course={course}
        isMarried={isMarried}
        kidsCount={kidsCount}
        gender={gender}
        skills={skills}
        hobbies={hobbies}
        qualification={qualification}
      />
    </>
  );
};
export default App;
*/

// ? === Default Props ===
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname="Amit"
        age={20}
        course="React JS"
        skills={["HTML", "CSS", "JS", "ReactJS"]}
        friends={{ fname: "Rahul", address: "Bangalore", Mobile: 7854120369 }}
      />
      <ChildComponent
        sname="Sumit"
        age={2}
        course="React JS"
        skills={["HTML", "CSS", "JS", "ReactJS"]}
        friends={{ fname: "shyam", address: "Delhi", Mobile: 9854120369 }}
      />
      <ChildComponent
        skills={["HTML", "CSS", "JS", "ReactJS"]}
        friends={{ fname: "Rahul", address: "Bangalore", Mobile: 7854120369 }}
      />
      <ChildComponent
        course="React JS"
        skills={["HTML", "CSS", "JS", "ReactJS"]}
      />
      <ChildComponent
        sname="Amit"
        age={20}
        friends={{ fname: "Rahul", address: "Bangalore", Mobile: 7854120369 }}
      />
    </>
  );
};
export default App;
*/

// ? Pure JavaScript data types
// Pure javascript data types we are unable to display on the UI
// Alllowed -string,number
// Not allowed - boolean,null,undefined,object,array,date,functions
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
      <h1>I am App component</h1>
      <ChildComponent
        sname="Amit"
        age={20}
        isplaced={true}
        companyName={undefined}
        salary={null}
        skills={["HTML", "CSS", "JS", "ReactJS"]}
        address={{ city: "Bangalore", state: "Karnataka" }}
        dob={new Date("01 12 2000 10:58:00")}
        clickfn={() => {
          console.log("clicked on button");
        }}
      />
    </>
  );
};

export default App;
*/

// ?============props drilling==============
/*
It is a process of passing props from one component to another component to another component and so on.
OR
It is a process of sharing b/w the components through multiple levels
*/
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  let myData="https://chat.qspiders.com/student-dashboard";
  let products=// 20250211160331
  // https://fakestoreapi.com/products
  
  [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "id": 7,
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "id": 8,
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    },
    {
      "id": 9,
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "rating": {
        "rate": 3.3,
        "count": 203
      }
    },
    {
      "id": 10,
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price": 109,
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 470
      }
    },
    {
      "id": 11,
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 319
      }
    },
    {
      "id": 12,
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 400
      }
    },
    {
      "id": 13,
      "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 250
      }
    },
    {
      "id": 14,
      "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      "price": 999.99,
      "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.2,
        "count": 140
      }
    },
    {
      "id": 15,
      "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "rating": {
        "rate": 2.6,
        "count": 235
      }
    },
    {
      "id": 16,
      "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      "price": 29.95,
      "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 340
      }
    },
    {
      "id": 17,
      "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      "price": 39.99,
      "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "rating": {
        "rate": 3.8,
        "count": 679
      }
    },
    {
      "id": 18,
      "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price": 9.85,
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 130
      }
    },
    {
      "id": 19,
      "title": "Opna Women's Short Sleeve Moisture",
      "price": 7.95,
      "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.5,
        "count": 146
      }
    },
    {
      "id": 20,
      "title": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "rating": {
        "rate": 3.6,
        "count": 145
      }
    }
  ];
  console.log("From App -",products);
  return(
    <>
    <h1>I am App Component</h1>
    <h4>
      Link :<a href={myData} target="_blank">Click Here</a>
    </h4>
    <br/>
    <ChildComponent data={myData} products={products}/>
    </>

  )
}

export default App;
*/

// ?==============PROPS TYPE =======================
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname={785}
        age={20}
        course="MERN stack"
        skills={["hello","world"]}
        address={{
          streetno: 123,
          colony: "patel nagar",
          pincode: 123456,
        }}
        isMarried={false}
      />
    </>
  );
};
export default App;
*/
// ?================Inlinestyle====================
/*
let App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>I am App Component using Inline CSS</h1>
      <section
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            flex: 1,
            textAlign: "center",
            border: "1px solid white",
            backgroundColor: "gray",
            padding:"10px"
          }}
        >
          Home
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            border: "1px solid white",
            backgroundColor: "gray",
            padding:"10px"
          }}
        >
          About
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            border: "1px solid white",
            backgroundColor: "gray",
            padding:"10px"
          }}
        >
          Contact
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            border: "1px solid white",
            backgroundColor: "gray",
            padding:"10px"
          }}
        >
          Service
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            border: "1px solid white",
            backgroundColor: "gray",
            padding:"10px"
          }}
        >
          Login
        </div>
      </section>
    </>
  );
};
export default App;
*/
// ?===============Module CSS==========
/*
import vn from './app.module.css'
let App=()=>{
  return(
    <>
    <h1>I am App Component using Module CSS</h1>
    <section id={vn.container}>
      <div className={vn.item}>Home</div>
      <div className={vn.item}>About</div>
      <div className={vn.item}>Contact</div>
      <div className={vn.item}>Service</div>
      <div className={vn.item}>Login</div>
    </section>
    </>
  )
}
export default App;

*/
// ?=============Global CSS===============
/*
let App=()=>{
  return(
    <>
    <h1>I am App Component using Global CSS</h1>
    <section id="container">
      <div className="item">Home</div>
      <div className="item">About</div>
      <div className="item">Contact</div>
      <div className="item">Service</div>
      <div className="item">Login</div>
    </section>
    </>
  )
}
export default App;
*/

// ?================Meesho Project===============
/*
import Product from './ChildComponent';
import assestsData from "./assets/Assets";
let App=()=>{
  return(
    <>
    <h1>Meesho Project</h1>
    <Product
        category="Men's Collection"
        data={assestsData.meeshoTask.menData}
      />
      <Product
        category="Women's Collection"
        data={assestsData.meeshoTask.womenData}
      />
      <Product
        category="Kid's Collection"
        data={assestsData.meeshoTask.kidData}
      />
      <Product
        category="Footwear's Collection"
        data={assestsData.meeshoTask.footwearData}
      />
      <Product
        category="Watch's Collection"
        data={assestsData.meeshoTask.watchData}
      />
    </>
  )
}
export default App;
*/

// !==================useState() hook ===========================
/*
It is a inbuilt hook provided by react JS
It helps us to create dynamic data in a component
It helps to do the state management in a component

Syntax : let [variable,updateFunction]=useState(initialValue);

*/
/*
import { useState } from "react";

let App = () => {
  let newcount=0//static data
  let [count, setCount] = useState(0);
  console.log(count);

  return (
    <>
      <h1>I am App component</h1>
      <h3>Count : {count}</h3>

      <button onClick={() => setCount(10)}>update to 10</button>
      <button onClick={() => setCount(20)}>update to 20</button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>reset</button>


      <button
        onClick={() => {
          newcount = newcount + 1;
          console.log(newcount);
          
        }}
      >
        update
      </button>
    </>
  );
};
export default App;
*/

// ?Example 1.1 : on Numbers
/*
import { useState } from "react";

let App=()=>{
  let [a,b]=useState(0);
  return (
    <>
    <h1>I am App Commponent</h1>
    <h3>Count :{a}</h3>
    <button onClick={() => b(1)}>update to 10</button>
    </>


  )
}
export default App;
*/

// ?Example 1.2 : on Numbers
/*
import { useState } from "react";

let App = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  return (
    <>
      <h1>I am App Commponent</h1>
      <h3>Count :{count1}</h3>
      <button onClick={() => setCount1(count1 + 1)}>Increment by 1</button>
      <button onClick={() => setCount1(0)}>reset</button>
      <button onClick={() => setCount1(count1 - 1)}>Decrement by 1</button>
      <br />
      <br />
      <h3>Count :{count2}</h3>
      <button onClick={() => setCount1(count2 + 5)}>Increment by 5 </button>
      <button onClick={() => setCount1(0)}>reset</button>
      <button onClick={() => setCount1(count2 - 5)}>Decrement by 5</button>
    </>
  );
};
export default App;
*/

// ?Example 2 : on String
/*
import {useState} from 'react'

const App = () => {
  let [name,setName]=useState("MSD")
  return (
    <div>
      <h1>I am App component</h1>
      <h2>name :{name}</h2>
      <button onClick={()=>setName("Mahinder")}>Half Name</button>
      <button onClick={()=>setName("Mahinder singh Dhoni")}>full Name</button>
    </div>
  )
}

export default App;
*/
// ?Example 3 : on Boolean
/*
import { useState } from 'react';

 const App = () => {
  let [gender,setGender]=useState(false)
  return (
    <div>
      <h1>I am App Component</h1>
      <h3>Gender : {gender?"male":"female"}</h3>
      <button onClick={()=>setGender(true)}>Male</button>
      <button onClick={()=>setGender(false)}>Female</button>


    </div>
  )
}

export default App;
*/

// ?Example 4 : on Array
/*
import { useState } from "react";

const App=()=>{
  let [skills,setSkiils]=useState(["html","css","javascript"])
  return(
    <>
    <h1>I am App component</h1>
    <button onClick={()=>{ setSkiils(["python" ,"MongoDB","Django"])}}>python</button>
    <button onClick={()=>{ setSkiils(["Java" ,"Hibernate","Spring"])}}>Java</button>
    <button onClick={()=>{ setSkiils(["html","css","javascript","React Js" ,"Node js"])}}>Mern</button>

    <h3>Skills: {skills.map((val)=> {  
    return <li>{val}</li>})
    }
    </h3>
    </>
  )
}

export default App;
*/

// ?Example 4.2 : on Array
/*
import { useState } from "react";
let python=["python" ,"MongoDB","Django"];
let java=["Java" ,"Hibernate","Spring"];
let mern=["React Js" ,"Node js" ,"Next js"];
let defaultSkills=["html","css","javascript"];
const App=()=>{
  let [skills,setSkiils]=useState(defaultSkills)
  return(
    <>
    <h1>I am App component</h1>
    <button onClick={()=>{ setSkiils(python)}}>python</button>
    <button onClick={()=>{ setSkiils(java)}}>Java</button>
    <button onClick={()=>{ setSkiils(mern)}}>Mern</button>

    <h3>Skills: {skills.map((val,index)=> {  
    return <li key={index}>{val}</li>})
    }
    </h3>
    </>
  )
}

export default App;
*/

// ? Example 5 : Objects
/*
import { useState } from "react";
let App=()=>{
let student1={sname:"amit",age:20,course:"Mern"};
  let student2={sname:"shubham",age:21,course:"python"};
  let student3={sname:"nazme",age:22,course:"java"};
  let student4={sname:"prabal",age:23,course:"java"};
  let [state,setState]=useState(student1);
  return(
  <>
  <h1>I am App Component</h1>
  <button onClick={()=>setState(student1)}>student 1</button>
  <button onClick={()=>setState(student2)}>student 2</button>
  <button onClick={()=>setState(student3)}>student 3</button>
  <button onClick={()=>setState(student4)}>student 4</button>
  <br/>
  <h2>Name :{state.sname}</h2>
  <h2>Name :{state.age}</h2>
  <h2>Name :{state.course}</h2>
  </>
  )
}
export default App; 
*/

// !==================FakeStoreApi=================================
/*
import assestsData from "./assets/Assets";
import { useState } from "react";
import ChildComponent from "./ChildComponent";
import style from "../fakeStoreTask.module.css";
let App=()=>{
  let products=assestsData.fakeStoreTask.products;

  let [data,setData]=useState(products);
  console.log(data);
  
  function handleAllData(){
    setData(products);
  }

  function handleMensClothing (){
    let filteredMen=[];
    products.map((val)=>{
      if(val.category==="men's clothing"){
        filteredMen.push(val)
      }
    });
    setData(filteredMen)
  };

  let handleWomens = () => {
    let filterWomens = [];

    products.map((val, ind) => {
      if (val.category === "women's clothing") {
        filterWomens.push(val);
      }
    });

    setData(filterWomens);
  };

  let handlejewelery = () => {
    let filterJewellery = [];
    products.map((val, ind) => {
      if (val.category === "jewelery") {
        filterJewellery.push(val);
      }
    });
    setData(filterJewellery);
  };

  let handleElectronics = () => {
    let filterElectronics = [];
    products.map((val, ind) => {
      if (val.category === "electronics") {
        filterElectronics.push(val);
      }
    });
    setData(filterElectronics);
  };


  return (
    <div id={style.whole_container}>
    <h1>FakeStore Api</h1>
        <div id={style.category_button}>
          <button onClick={handleAllData} className={style.category_btn_style}>All Item</button>
          <button className={style.category_btn_style} onClick={handleMensClothing}>men's clothing</button>
          <button className={style.category_btn_style} onClick={handleWomens}>women's clothing</button>
          <button className={style.category_btn_style} onClick={handlejewelery}>jewelery</button>
          <button className={style.category_btn_style} onClick={handleElectronics}>electronics</button>
        </div>
    <ChildComponent product={data}/>
    </div>
  )
}
export default App;
*/

// !=========Context api============
/*

import { createContext } from "react";
import ChildComponentA from "./ChildComponentA";
import assestsData from "./assets/Assets";

 ?Step 1:
export let MyContext = createContext();

const App = () => {
  let data = assestsData.fakeStoreTask.products;
  return (
    <div>
      I am app component
     
      <MyContext.Provider value={data}>
        <ChildComponentA />
      </MyContext.Provider>
    </div>
  );
};
export default App;
*/
// ?===============Context Api task====================

/*
import React from "react";
import QspiderComponent from "./ContextApi_task/QspiderComponent";
let App = () => {
  return (
    <div>
      <h1>I am App component</h1>
      <QspiderComponent />
    </div>
  );
};

export default App;
*/

// ! ====================== HOC =================
/*
import React from "react";
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

const App = () => {
  console.log("App Component");

  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponentA id="A101" />
      <ChildComponentB id="B202" />
    </>
  );
};

export default App;
*/

// ?=================Counter Task using HOC=====================
/*
import React from "react";
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

const App = () => {
  return (
    <div>
      <h1>I am App Component</h1>
      <ChildComponentA />
      <ChildComponentB />
    </div>
  );
};

export default App;
*/

// !====================Conditional Rendering============
/*
1. If ,if-else,else-if,switch
2.Ternary operator
3.Short circuit operator(Logical AND) 
  Syntax :condition && dataToDisplay
*/
// ?=================Using if-else=========================
//1. if-else statement we should not use inside return statement
/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  console.log(counter);

  if (counter % 2 === 0) {
    return (
      <>
        <h1>I am App component</h1>
        <h2>Counter -: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <h2>Status :Even number</h2>
      </>
    );
  } else {
    return (
      <>
        <h1>I am App component</h1>
        <h2>Counter -: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <h2>Status :Odd number</h2>
      </>
    );
  }
};

export default App;
*/
// ?=================Using else-if=========================
/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  console.log(counter);

  if (counter % 2 === 0) {
    return (
      <>
        <h1>I am App component</h1>
        <h2>Counter -: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <h2>Status :Number is divisble by 2</h2>
      </>
    );
  } else if (counter % 3 === 0) {
    return (
      <>
        <h1>I am App component</h1>
        <h2>Counter -: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <h2>Status :Number is divisble by 3</h2>
      </>
    );
  } else if (counter % 5 === 0) {
    return (
      <>
        <h1>I am App component</h1>
        <h2>Counter -: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <h2>Status :Number is divisble by 5</h2>
      </>
    );
  } else if (counter % 7 === 0) {
    return (
      <>
        <h1>I am App component</h1>
        <h2>Counter -: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <h2>Status :Number is divisble by 7 </h2>
      </>
    );
  } else {
    return (
      <>
        <h1>I am App component</h1>
        <h2>Counter -: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <h2>Status :Number is divisble by 1</h2>
      </>
    );
  }
};
export default App;
*/

// ?================== Using ternary=================
/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <>
      <h1>I am App component</h1>
      <h2>Counter -: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
      <h2>Status :{counter % 2 == 0 ? "Even" : "Odd"} number</h2>
    </>
  );
};

export default App;
*/

// ?================== Using circuit operato=================
/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <>
      <h1>I am App component</h1>
      <h2>Counter -: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
      <h2>Status :{counter%2===0?"even":"odd" } number</h2>
    </>
  );
};

export default App;
*/
// ? =========== Logical AND Operator =========
/*
import React, { useState } from "react";

const App = () => {
  let [status, setStatus] = useState(true);

  return (
    <>
      <h1>I am App Component</h1>

      <button onClick={() => setStatus(true)}>Placed</button>
      <button onClick={() => setStatus(false)}>Not Placed</button>
      <h2>Status: {status ? "Placed" : "Not Placed"} </h2>
      <h2>Status : {status && "Placed"}</h2>
    </>
  );
};

export default App;
*/

// ^===============Conditional Rendering=============
// ?Example 1
/*
import React from 'react'

const App = () => {
  let students=[
    {sname:"Ekansh" ,isplaced:false},
    {sname:"ram" ,isplaced:true},
    {sname:"shyam" ,isplaced:true},
    {sname:"mihir" ,isplaced:false},
    {sname:"prabal" ,isplaced:true},
    {sname:"sumit" ,isplaced:true},
    {sname:"kanishka" ,isplaced:false},
  ];
  
  return (
    <>
    <h1>Students Details :</h1>
    {students.map((val,ind)=>{
      console.log(val,ind);
      
      return(
        <p>
          {val.sname} {val.isplaced?"✅":"❌"}
        </p>
      )
    })}
    </>
  )
}

export default App
*/

// ?Example 2
/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <>
      <h1>Indian Got Latent</h1>
      <article>
        {toggle ? (
          <i class="fa-solid fa-toggle-on" onClick={() => setToggle(false)}></i>
        ) : (
          <i class="fa-solid fa-toggle-off" onClick={() => setToggle(true)}></i>
        )}
      </article>
        <br></br>

      <aside>
        <h4>
          <i class="fa-solid fa-house"></i>
          {toggle && <span className="m-8">Home</span>}
        </h4>
        <br></br>
        <h4>
          <i class="fa-solid fa-address-book"></i>
          {toggle && <span>Contact</span>}
        </h4>
        <br></br>
        <h4>
        <i class="fa-solid fa-cart-shopping"></i>
        {toggle&&<span>Cart</span>}
        </h4>
        <br></br>
      </aside>
    </>
  );
};

export default App;
*/

// !============Gemini Clone==============
/*
import React from "react";
import Gemini from "./Gemini_task/gemini";
const App = () => {
  return (
    <>
      <Gemini />
    </>
  );
};

export default App;
*/

// ! ========================= Forms in React JS ===============
// ! ===================== UnControlled Forms =====================
// ? ============ useRef() Hook ==============
/*
To get the reference of an element we have to use useRef() Hook.
For reference of an element we have to use useRef() Hook.
    1. import useRef()
    2. store in a variable
    3. to pass reference we have to use "ref prop" and assgin the variable name.

Reference variable should be assigned to only one element.
If we repeat the variable name for multiple elements , it wil target the most updated element.
*/

// ? Example 1:
/*
import React from "react";
import { useRef } from "react";

const App = () => {
  let nameRef = useRef();
  // console.log(nameRef);

  let emailRef = useRef();
  let mobileRef = useRef();
  let handleSubmit = (e) => {
    e.preventDefault();

    // console.log(nameRef);
    // console.log(nameRef.current);
    // console.log(nameRef.current.value);

    // console.log(nameRef.current.value);
    // console.log(emailRef.current.value);
    // console.log(mobileRef.current.value);
    console.log({
      userName: nameRef.current.value,
      userEmail: emailRef.current.value,
      userNo: mobileRef.current.value,
    });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" ref={nameRef} /> <br /> <br />
        <label>Email :</label>
        <input type="text" ref={emailRef} /> <br /> <br />
        <label>Mobile :</label>
        <input type="text" ref={mobileRef} /> <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
*/

// ?Example 2
// Sum of 3 numbers
/*
import React from "react";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  let [result, setResult] = useState("");

  let number1 = useRef();
  let number2 = useRef();
  let number3 = useRef();

  console.log(number1);
  console.log(number2);
  console.log(number3);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(number1.current.value);
    console.log(typeof number1.current.value);
    console.log(number2.current.value);
    console.log(number3.current.value);

    console.log(Number(number1.current.value));
    console.log(number1.current.value * 1);
    console.log(+number1.current.value);
    console.log(typeof Number(number1.current.value));

    setResult(
      Number(number1.current.value) +
        Number(number2.current.value) +
        Number(number3.current.value)
    );
    //  +number1.current.value + +number2.current.value + +number3.current.value;
    //  number1.current.value*1 + number2.current.value*1 + number3.current.value*1;
  };

  return (
    <div>
      <h1>Addition Form</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Number 1 : </label>
          <input type="tel" ref={number1} />
        </p>
        <p>
          <label>Number 2 : </label>
          <input type="tel" ref={number2} />
        </p>

        <p>
          <label>Number 3 : </label>
          <input type="tel" ref={number3} />
        </p>

        <p>
          <button>submit</button>
        </p>
      </form>
      {result && <h2>Output is : {result}</h2>}
    </div>
  );
};

export default App;
*/

// ! ===================== Controlled Forms =====================
/*
    1. useState( ) Hook
    2. value prop
    3. readOnly / onChange Event

Note: 
  You provided a `value` prop to a form field without an `onChange` handler.
  This will render a read-only field. 
*/
/*

?Example 2
import React, { useState } from "react";

const App = () => {
  let [name, setName] = useState("Amit");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  return (
    <>
      <h1>Registration Form</h1>
      <form action="">
        <p>
          <label>Name : </label>
          <input
            type="text"
            value={name}
            onChange={e => {
              // console.log("I am changing...");
              // console.log(e);
              // console.log(e.target);
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Email : </label>
          <input type="text" value={email}  onChange={e => {
              setEmail(e.target.value);
            }} />
        </p>
        <p>
          <label>Mobile No : </label>
          <input type="text" value={mobile}
            onChange={e => setMobile(e.target.value)} />
        </p>
        <p>
          <button>submit</button>
        </p>
      </form>
    </>
  );
};
export default App;
*/

// ? Example 2
/*
import React, { useState } from "react";

const App = () => {
  let [number1,setNumber1]=useState("");
  let [number2,setNumber2]=useState("");
  let [number3,setNumber3]=useState("");
  let [result,setResult]=useState("");

  let handleSubmit=(e)=>{
    e.preventDefault();
    let sum=+number1+ +number2+ +number3;
    setResult(sum)
  }
  return (
  <div>
    <h1>Addition of 3 numbers</h1>
    <form onSubmit={handleSubmit}>
      <p>
        <label>Number 1 :</label>
        <input type="text" value={number1} onChange={e=>{setNumber1(e.target.value)}}></input>
      </p>
      <p>
        <label>Number 2 :</label>
        <input type="text" value={number2} onChange={e=>{setNumber2(e.target.value)}}></input>
      </p>
      <p>
        <label>Number 3 :</label>
        <input type="text" value={number3} onChange={e=>{setNumber3(e.target.value)}}></input>
      </p>
      <button>Submit</button>
    </form>
    {result&&<h1>Output :{result}</h1>}
  </div>
  );
};

export default App;
*/
// ?Exammple 3
/*
import React, { useState } from "react";

const App = () => {
  const [formData, setformData] = useState({
    sname: "Keshav",
    email: "k@gmail.com",
    phone: "7854123690",
  });
  
  /*const handleName = (e) => {
    // console.log(e.target.value);
    setformData({
      ...formData,
      sname: e.target.value,
    });
  };

  const handleEmail = (e) => {
    // console.log(e.target.value);
    setformData({
      ...formData,
      email: e.target.value,
    });
  };

  const handlePhone = (e) => {
    // console.log(e.target.value);
    setformData({
      ...formData,
      phone: e.target.value,
    });
  };
  */
/*
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const handleChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>My form</h1>
        <p>
          <label>Name :</label>
          <input type="text" value={formData.sname} onChange={handleChange} name="sname"></input>
        </p>
        <p>
          <label>Email : </label>
          <input type="text" value={formData.email} onChange={handleChange} name="email" />
        </p>
        <p>
          <label>Mobile No : </label>
          <input type="text" value={formData.phone} onChange={handleChange} name="phone" />
        </p>
        <p>
          <button>submit</button>
        </p>
      </form>
    </div>
  );
};

export default App;

*/

// !==============Life Cycle Mthod  of a Compoenent======================
/*
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    // super()
    console.log(super(props));

    this.state = {
      counter: 0,

    };

    console.log(this);
    console.log(this.state);
    console.log(this["state"]);
  }

  render() {
    console.log("I am Class based App Component");

    return (
      <div>
        <h1>I am App Component</h1>
        <h2>Count :{this.state.counter}</h2>
        <button
          onClick={() => {
            console.log("Increment button Clicked");
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            console.log("Reset button Clicked");
            this.setState({
              counter: 0,
            });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            console.log("Decrement button Clicked");
            this.setState({
              counter: this.state.counter - 1,
            });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
*/

// ?Example 2
/*
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(super());

    this.state = {
      counter: 0,
      counter1: 0,
      counter2: 0,
    };

    console.log(this);
    console.log(this.state);
    console.log(this["state"]);
  }

  render() {
    console.log("I am Class based App Component");

    return (
      <div>
        <h1>I am App Component</h1>
        <h2>Count :{this.state.counter}</h2>
        <h2>Count :{this.state.counter1}</h2>
        <h2>Count :{this.state.counter2}</h2>
        <button
          onClick={() => {
            console.log("Increment button Clicked");
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            console.log("Reset button Clicked");
            this.setState({ counter: 0 });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            console.log("Decrement button Clicked");
            this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Decrement
        </button>
        <br></br>
        <button
          onClick={() => {
            console.log("Increment button Clicked");
            this.setState({ counter1: this.state.counter1 + 1 });
          }}
        >
          Increment{" "}
        </button>
        <button
          onClick={() => {
            console.log("Reset button Clicked");
            this.setState({ counter1: 0 });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            console.log("Decrement button Clicked");
            this.setState({ counter1: this.state.counter1 - 1 });
          }}
        >
          Decrement
        </button>
        <br></br>
        <button
          onClick={() => {
            console.log("Increment button Clicked");
            this.setState({ counter2: this.state.counter2 + 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            console.log("Reset button Clicked");
            this.setState({ counter2: 0 });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            console.log("Decrement button Clicked");
            this.setState({ counter2: this.state.counter2 - 1 });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
*/

// !=========================MOUNTING Phase=================================
/*
  Whenever a component is created and inserted into the DOM is called Mounting Phase.
  ? 1. Constructor()
    a. It is the first method to be called in Mounting Phase
    b. This method will execute only once after the component Mounted.
    c. It is the best place to do initializations.
    d. To use "this" keyword,
        i. firstly, we have to extend the features of React.Component
        ii. we have to pass props as parameter to constructor method
        iii. we must use super call.
        iv. "this" keyword will points to the current component.
    e. By default CBC contains state data. 
    f. To create state data, this.state = object;
    g. To udpate the state data, this.setState(new state obj)

  ? 2. getDerivedStateFromProps():
    a. getDerivedStateFromProps() method should be static.
    b. It will execute just before the render() method.
    c. It will return the new state data. 
    d. it accepts prev props, prevstate as a paramters.
    e. It must and should return a valid state object / null.

  ? 3. render()
    a. It is the only mandatory method in CBC's,
    b. It will execute for each and every updates.
    c. render() method allows us to write JSX(html + js);
    d. It is not the best place to do side effects
    e. side effects means the things which are not in react
        ex: fetch , timers, window properties, etc.

  
  ? 4. componentDidMount():
    a. componentDidMount() method will work only once after the component is mounted.
    b. This is the best place to perform side effects
    c. prefered to make GET requests here.
    

*/
/*
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    console.log("I am connstructor ( ) method");

    super(props);

    this.state = { counter: 0 };
    console.log(this.state);
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    console.log("I am getDerivedStateFromProps () methods");

    //return newStateValue;
    console.log(prevState);
    return { counter: 50 };
    // return null;
  }

  componentDidMount() {
    console.log("I am componentDidMount() Method");
    let getData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };

    getData();
  }

  render() {
    return (
      <div>
        <h1>I am App Component</h1>
        <h2>Counter : {this.state.counter}</h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          {" "}
          Update
        </button>
      </div>
    );
  }
}

export default App;
*/

// !========================Updating Phase===============================

/*
whenever there some changes in component , react will re-render the component and this phase is called updating phase.

changes in props .state.

? 1. getDerivedStateFromProps()
    a. It method is as same in Mounting phase.
    b. It will execute just before the render() method.
    c. It will return the new object as state data.
    d. It accepts prevProps, prevState as a parameters.
    e. It will provide the static state data.

? 2. shouldComponentUpdate()
    This method helps us to improve the performance of the application.
    It will commpare the previous props/state and current props/state.    
    It will return a boolean value.
    if true , render() method will execute.
    if false, render() method will not execute.
    By default it will return true.

    Called to determine whether the change in props and state should trigger a re-render.
    Compoent always returns true.
    PureComponent implements a shallow comparison on props and state and returns true if any props or state have changed.
    If false is returned, component.render ,componentDidUpdate will not be invoked.

? 3. render()
    a. It is the only mandatory method in CBC's,
    b. It will execute for each and every updates.
    c. render() method allows us to write JSX(html + js);
    d. It is not the best place to do side effects
        ex: fetch , timers, window properties, etc.

? 4. getSnapshotBeforeUpdate()
    This method will start working just before the render() method.
    Through out the render method it will observe the changes and it will send the changes to componentDidUpdate() method
    getSnapshotBeforeUpdate() should be used with componentDidUpdate().
    This component defines getSnapshotBeforeUpdate() only.
    App.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned.   
    a. getSnapshotBeforeUpdate() method will execute just before the DOM is updated.
    b. It will return the snapshot value.
    c. It accepts prevProps, prevState as a parameters.
    d. It will provide the snapshot value.

? 5. componentDidUpdate()
    a. componentDidUpdate() method will execute after the DOM is updated.
    b. It will accept prevProps, prevState, snapshot as a parameters.
    c. It is the best place to perform side effects.
    d. It is the best place to make network requests.
    e. It is the best place to update the DOM in response to prop/state changes.
    f. It is the best place to update the state data.


*/
/*
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    console.log("I am connstructor ( ) method");

    super(props);

    this.state = { counter: 0 };
    // console.log(this.state);
  }


  static getDerivedStateFromProps(prevProps, prevState) {
    console.log("I am getDerivedStateFromProps () methods");
    return null;
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log("I am shouldComponentUpdate() Method");
    console.log(prevProps, prevState);
    //if previous states/props == current states/props
    // return false;

    //if previous states/props != current states/props
    // return true;

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("I am getSnapshotBeforeUpdate() Method");
    console.log(prevProps, prevState);
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("I am componentDidUpdate() Method");
    console.log("My Snap data is ", snapshot);
  }

  componentDidMount() {
    console.log("I am componentDidMount() Method");
    let getData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      // console.log(data);
    };

    getData();
  }

  render() {
    return (
      <div>
        <h1>I am App Component</h1>
        <h2>Counter : {this.state.counter}</h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          {" "}
          Update
        </button>
      </div>
    );
  }
}

export default App;
*/

// !====================Unmounting Phase=======================
/*
  Whenever a component is removed from the DOM is called Unmounting Phase.
  ? 1. componentWillUnmount()
    a. componentWillUnmount() method will execute just before the component is removed from the DOM.
    b. It is the best place to perform clean up operations.
    c. It is the best place to cancel network requests.
    d. It is the best place to clean up subscriptions.
    e. It is the best place to clean up timers.
    f. It is the best place to clean up any side effects.

*/
/*
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
class App extends Component {
  constructor(props) {
    console.log("I am connstructor ( ) method");

    super(props);

    this.state = { counter: 0, isDisplay: true };
  }

  render() {
    return (
      <div>
        <h1>I am App Component</h1>
        <button
          onClick={() => {
            this.setState({ isDisplay: !this.state.isDisplay });
          }}
        >toggle</button>
        {this.state.isDisplay && <ChildComponent />}
      </div>
    );
  }
}

export default App;
*/

// !====================UseEffect Hook=======================
/*
1. useEffect() is a hook in react which helps to perform side effects in functional components.
2. useEffect() is an alternative to componentDidMount(),componentDidUpdate(),componentWillUnmount() in class based components.

*/
/*
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

const App = () => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);
  let [toggle, setToggle] = useState(false);
*/
// ? Case 1:
//useEffect hook without dependency array will work for every changes.
/*
  useEffect(()=>{
    console.log("I am useEffect() method case 1");
    let getData=async()=>{
      let res=await fetch("https://fakestoreapi.com/products");
      let data=await res.json();
      console.log(data);
      }
      getData();
      })
      */

// ? Case 2:
//useEffect hook with dependency array will work for only once.
//It will act as componentDidMount() method
/*
     useEffect(()=>{
      console.log("I am useEffect() method case 2");
      let getData=async()=>{
        let res=await fetch("https://fakestoreapi.com/products");
        let data=await res.json();
    console.log(data);
    }
    getData();
    },[])
    */

// ? Case 3:
//useEffect hook with dependency array
/*
  useEffect(() => {
    console.log("I am useEffect() method case 3");
    let getData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  }, [counter1]);

  useEffect(() => {
    console.log("I am useEffect() method case 3");
    let getData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  }, [counter2]);

  useEffect(() => {
    console.log("I am useEffect() method case 3");
    let getData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  }, [counter1, counter2]);

  return (
    <div>
      <h1>I am App Component</h1>
      {toggle && <ChildComponent />}
      <h2>Counter1 - {counter1}</h2>
      <h2>Counter2 - {counter2}</h2>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment</button>
    </div>
  );
};

export default App;
*/

// !====================useEffect() with axios=======================

/*
? step 1 :
npm i axios

? step 2 :
import variableName from "axios";

? step 3 :
API Request
GET ->It helps to get the data from the server.
POST ->It helps to send the data to the server.
PUT ->It helps to update the data.
PATCH ->It helps to update the data(Partially).
DELETE ->It helps to delete the data.

? step 4 :
working
GET :
axios.get("url")

POST:
axios.post("url",payload)

PUT:
axios.put("url",payload)

PATCH:
axios.patch("url",payload)

DELETE:
axios.delete("url")
*/

/*
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  let [products, setProducts] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    console.log("I am useEffect() method");
    getData();
  }, []);

  return (
    <>
     <h1>  useeffect using axios</h1>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.image}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default App;
*/

// !==================PORTAL/Models=========================
/*
portal allow us to display data on the UI and without rendering into root element .

2. HOW TO USE THIS :
Step 1 : create one root element in the main html file use id and target it,

Step 2 : 
        import ReactDOM from 'reactDOM'

        ReactDOM.createPortal (content ,container);
        ex -: ReactDOM.createPortal(<h1>I am portal </h1>,document.getElementById("portal"));
*/

// ?Case 1:
/*
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const App = () => {
  let [isOpen1, setOpen1] = useState(false);
  let [isOpen2, setOpen2] = useState(false);
  return (
    <>
      <h1>I am App Component</h1>
      <section style={{ border: "solid" }}>
        <h1>without portal</h1>
        {isOpen1 ? (
          <h1>
            I am display without portal
            <button onClick={() => setOpen1(false)}>❌</button>
          </h1>
        ) : null}
        <button onClick={() => setOpen1(true)} className="border-2 bg-amber-200 text-white">Open 1</button>
      </section>

      <section style={{ border: "solid" }}>
        <h1>with portal</h1>
        {isOpen2
          ? ReactDOM.createPortal(
              <h1>
                I am display with portal
                <button onClick={() => setOpen2(false)}>❌</button>
              </h1>,
              document.getElementById("portal")
            )
          : null}

        <button onClick={() => setOpen2(true)}>Open 2</button>
      </section>
    </>
  );
};

export default App;
*/

//? Case 2
/*
import React, { useState } from 'react'
import NonPortalComponent from './portal/NonPortalComponent';
import PortalComponent from './portal/PortalComponent';

const App = () => {
  let [isOpen1, setOpen1] = useState(false);
  let [isOpen2, setOpen2] = useState(false);
  return (
    <>
    <h1>Without portal</h1>
    <section  className=" m-2 ">
      {isOpen1 && <NonPortalComponent />}
      <button onClick={()=>setOpen1(true)}  className='cursor-pointer border-2 rounded-2xl p-2'>Open Non Portal Component</button>
    </section>

    <h1>With portal</h1>
    <section className='m-2'>
      {isOpen2 && <PortalComponent closeFn={()=>setOpen2(false)}/>}
      <button onClick={()=>setOpen2(true)} className='cursor-pointer border-2 rounded-2xl p-2'>Open Portal Component</button>
    </section>

    </>
  )
}

export default App
*/

// !==========================================================
/*
import React from "react";
import PureParent from "./PureComponent/PureParent";

const App = () => {
  return (
    <>
      <PureParent />
    </>
  );
};

export default App;
*/
// ! ========== useCallback() ==============
/*
It will helps us to add additional features to React.memo 
? When to use:
  whenever we are passing functions as props we have to use it.

? How to use: 
  Syntax: useCallback( function, [dependencies])

? Working:
1. It will stop the recreation of functions unless the dependency changed.
2. as there is not recreation of function, function  reference will not change, as function reference not changed it props are not changed, as props not changed it will not re-render the component.
*/
/*
import React, { useCallback, useState } from "react";
import TitleComponent from "./TitleComponent";
import CounterComponent from "./CounterComponent";
import ButtonComponent from "./ButtonComponent";

const App = () => {
  let [age, setAge] = useState(20);
  let [salary, setSalary] = useState(50000);

  let handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  let handleSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  return (
    <center>
      <TitleComponent>useCallback() Hook</TitleComponent>

      <CounterComponent data={age}>Age</CounterComponent>
      <ButtonComponent fn={handleAge}>Update Age</ButtonComponent>

      <CounterComponent data={salary}>Salary</CounterComponent>
      <ButtonComponent fn={handleSalary}>Update Salary</ButtonComponent>
    </center>
  );
};

export default App;
*/

// ! ============== useMemo() Hook ==========
/*
  To handle heavy functions in React Component we have to use useMemo() Hook.
*/
/*
import React, { useMemo, useState } from "react";

const App = () => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  ? Syntax: useMemo(callback , [dependency]);
  let isEven = useMemo(() => {
    console.log("isEven() is working");

    let sum = 0;
    for (let i = 0; i <= 300000000; i++) {
      sum += i;
    }
    console.log(sum);

    // if (counter1 % 2 === 0) {
    //   return true;
    // }
    // return false;

    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <>
      <h1>I am App Component</h1>
      <h2>Counter 1 : {counter1}</h2>
      <button onClick={() => setCounter1(counter1 + 1)}>Update Counter1</button>

      {isEven ? "Even" : "Odd"}

      <h2>Counter 2 : {counter2}</h2>
      <button onClick={() => setCounter2(counter2 + 1)}>Update Counter2</button>
    </>
  );
};

export default App;
*/

// ! ================= React- Routing (version 5) =================
/*
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Company from "./pages/aboutPages/Company";
import Employes from "./pages/aboutPages/Employes";
import Users from "./pages/aboutPages/Users";
import ContactHr from "./pages/contactPages/ContactHr";
import ContactTrainer from "./pages/contactPages/ContactTrainer";
import ContactCounsellors from "./pages/contactPages/ContactCounsellors";
import LoginUser from "./pages/loginPages/LoginUser";
import LoginAdmin from "./pages/loginPages/LoginAdmin";
import Dashboard from "./pages/Dashboard";
import HandleError from "./pages/HandleError";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="company" element={<Company />} />
              <Route path="employee" element={<Employes />} />
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="/contact" element={<Contact />}>
              <Route path="hrs" element={<ContactHr />} />
              <Route path="trainers" element={<ContactTrainer />} />
              <Route path="counsellors" element={<ContactCounsellors />} />
            </Route>
            <Route path="/login" element={<Login />}>
              <Route path="loginUser" element={<LoginUser />} />
              <Route path="loginAdmin" element={<LoginAdmin />} />
            </Route>
          </Route>
            <Route path="*" element={<HandleError />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

*/

// ! ============== React Routing (v6) ==============
/*
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
*/

// ! ============== React - Nested Routing (V6) =============

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Users from "./pages/aboutPages/Users"
import Employes from "./pages/aboutPages/Employes"
import Login from './pages/Login';
import Company from "./pages/aboutpages/Company";
import HandleError from "./pages/HandleError";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
          children: [
            {
              path: "company",
              element: <Company />,
            },
            {
              path: "employee",
              element: <Employes />,
            },
            {
              path: "Users",
              element: <Users />,
            },
          ],
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "*",
      element: <HandleError />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;