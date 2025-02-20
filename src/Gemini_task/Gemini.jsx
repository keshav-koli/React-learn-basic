import React, { useState } from "react";
import style from "../../gemini.module.css";

const gemini = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div id={style.Container}>
      <div className={style.sideBar}>
        <div>
          <i className="fa-solid fa-bars" onClick={() => setToggle(!toggle)}></i>
        </div>
        <button className={style.btn}>
          <i className="fa-solid fa-plus "></i>
          {toggle && <span> New Chat</span>}
        </button>
        <div className={style.sideBarDown}>
          <div>
            <i className="fa-solid fa-gem"></i>
            {toggle && <span>Gem Manager</span>}
          </div>
          <div>
            <i className="fa-solid fa-question"></i>
            {toggle && <span>Help</span>}
          </div>
          <div>
            <i className="fa-solid fa-clock-rotate-left"></i>
            {toggle && <span>Activity</span>}
          </div>
          <div>
            <i className="fa-solid fa-gear"></i>
            {toggle && <span>Setting</span>}
          </div>
          {toggle && (
            <div>
              <span> • Delhi, India </span>
              <p>From your IP address • Update location</p>
            </div>
          )}
        </div>
      </div>
      <div id={style.mainBar}>
        <h2>Gemini</h2>
      </div>
    </div>
  );
};

export default gemini;
