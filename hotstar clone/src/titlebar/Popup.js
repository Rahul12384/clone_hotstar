import "./Popup.css";
import { useState,useEffect,useRef } from "react";
import PopupLogin from "./PopupLogin";
import PopupEmFb from "./PopupEmFb";


const Popup = (props) => {
  var [val, setVal] = useState(0);
  // const [emFb, setEmFb] = useState(0)
  const [trig, setTrig] = useState(false)
  const [trigEmFb,setTrigEmFb]=useState(false)
  console.log("trig",trig)
  const makeChanges=(event)=>{
    console.log("makechanges")
    console.log("event.target",event.target.value)
    setVal(event.target.value)
    setTrig(true)
  }
  if(trig===false){
      val=0
  }

  const loginChange=()=>{
    setTrig(false)
    // setVal(0)
  }

  let popupRef=useRef();
  useEffect(() => {
    let handler=(event)=>{
      console.log("popupref.current",popupRef.current)
      console.log("event.target",event.target)
      if(popupRef.current && !popupRef.current.contains(event.target))
      {
      console.log("in if use effect")
        props.setTrigger(false)}
    }
    document.addEventListener("mousedown",handler);
    return ()=>{
      document.removeEventListener("mousedown",handler)
    }
  },[popupRef,props]);


  if (val === 0 && !trigEmFb) {
    return props.trigger ? (
      <div  className="popup">
        <div ref={popupRef} className="popup_inner">
          {props.children}
          <img
            className="popup_close-btn" 
            alt=""
            onClick={() => props.setTrigger(false)}
            src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-white-cancel-button-icon-image_1338668.jpg"
          ></img>
          <div className="popup_login-text">Login to continue</div>
          <div className="popup_email">
            <button className="popup_email-btn" onClick={()=>setTrigEmFb(true)}>
              Have a Facebook/Email account?
            </button>
          </div>
          <div className="popup_or">or</div>
          <div className="popup_mobile">
            {/* <span className="popup_mobile-ctry-code">"+91"</span> */}
            <input
              className="popup_mobile-inp"
              onChange={makeChanges}
              // onChange={makeChanges }
              value=""
              autoFocus={true}
              type="text"
              placeholder="Enter your mobile number"
            ></input>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  } 
  else if(!val && trigEmFb){
    console.log("in emfb if")
      return <PopupEmFb trigEmFb={trigEmFb} setTrigEmFb={setTrigEmFb}></PopupEmFb>
  }
  else {
    return <PopupLogin trig={trig} setVal={setVal} loginchange={loginChange} setTrig={setTrig} val={val}/>;
  }
};

export default Popup;
