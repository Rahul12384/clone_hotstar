import React from "react";
import "./PopupLogin.css";

import { useRef, useEffect,useState } from "react";

function PopupLogin(props) {

  const [value, setValue] = useState(props.val)
  console.log("inPopuplogin");
  console.log("props.trig", props.trig);

  if(value.length===0){
    props.setTrig(false)
  }

  let popupLoginRef = useRef();
    useEffect(() => {
      let handler = (event) => {
        console.log("popupLoginref.current", popupLoginRef.current);
        console.log("event.target", event.target);
        if (
          popupLoginRef.current &&
          !popupLoginRef.current.contains(event.target)
        ) {
          console.log("in popupLogin if");
          props.setTrig(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }, [popupLoginRef,props]);
  return props.trig ? (
    <div className="popuplogin">
      <div ref={popupLoginRef} className="popuplogin-inner">
        <img
        alt=""
          className="popuplogin_back-btn"
          onClick={() => props.setVal(0)}
          src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/38-512.png"
        ></img>

        {/* <img
          className="popuplogin_close-btn"
          onClick={() => props.setTrig(false)}
          src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-white-cancel-button-icon-image_1338668.jpg"
        ></img> */}
        <div className="popuplogin_continue-text">Continue using Phone</div>
        <div className="popuplogin_mobile">
          <input
            className="popuplogin_mobile-inp"
            type="text"
            autoFocus={true}
            value={value}
            onChange={(event)=>{setValue(event.target.value)}}
            placeholder="Enter your mobile number"
          ></input>
        </div>
        <div className="popuplogin_continue">
          <button className="popuplogin_continue-btn">Continue</button>
          <div className="popuplogin_spanbox">
          <span className="popuplogin_span1">
            By Proceeding you agree to the
          </span>
          <span className="popuplogin_span2"> Terms of use </span>
          <span className="popuplogin_span1">and </span>
          <span className="popuplogin_span2"> Privacy</span>
          </div>
          </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupLogin;
