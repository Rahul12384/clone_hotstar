import React from "react";
import "./PopupEmFb.css";
import {useEffect,useRef} from "react"
// import GoogleLogin  from "react-google-login"

function PopupEmFb(props) {
  console.log("in popupEmFb");
  console.log("props.trigemfb", props.trigEmFb);
  const lin="https://www.facebook.com/login.php?skip_api_login=1&api_key=1439455966343706&kid_directed_site=0&app_id=1439455966343706&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%3Fapp_id%3D1439455966343706%26cbt%3D1638527878508%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df3808cbcfa49e28%2526domain%253Dwww.hotstar.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.hotstar.com%25252Ff31ae9d7b9a89ec%2526relation%253Dopener%26client_id%3D1439455966343706%26display%3Dpopup%26domain%3Dwww.hotstar.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.hotstar.com%252Fin%26locale%3Den_US%26logger_id%3Df220f94d5f6554%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df27fe108331f424%2526domain%253Dwww.hotstar.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.hotstar.com%25252Ff31ae9d7b9a89ec%2526relation%253Dopener%2526frame%253Dfc9594626d154%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Dpublic_profile%252Cemail%252Cuser_birthday%252Cuser_gender%26sdk%3Djoey%26version%3Dv2.9%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df27fe108331f424%26domain%3Dwww.hotstar.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.hotstar.com%252Ff31ae9d7b9a89ec%26relation%3Dopener%26frame%3Dfc9594626d154%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0"

  let popupEmFbRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      console.log("popupLoginref.current", popupEmFbRef.current);
      console.log("event.target", event.target);
      if (
        popupEmFbRef.current &&
        !popupEmFbRef.current.contains(event.target)
      ) {
        console.log("in popupLogin if");
        props.setTrigEmFb(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [popupEmFbRef,props]);

  // const responseGoogle=(response)=>{
  //   console.log(response)
  //   console.log(response.profileObj)
  //   console.log(response.tokenObj.access_token)
  // }
  return props.trigEmFb ? (
    <div className="popupemfb">
      {console.log("in div popupemfb")}
      <div ref={popupEmFbRef} className="popupemfb-inner">
        <img
        alt=""
          className="popupemfb_back-btn"
          onClick={() => props.setTrigEmFb(false)}
          src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/38-512.png"
        ></img>
        <div className="popupemfb_haveemfb-text">Have an Email or Facebook account?</div>
        <div className="popupemfb_enteremail">
          <input
            className="popupemfb_enteremail-inp"
            type="email"
            autoFocus={true}
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="popupemfb_continue">
          <button className="popupemfb_continue-btn">Continue</button>
        </div>
        <div className="popupemfb_or">OR</div>
        <a href={lin} target="_blank">
        <div className="popupemfb_facebook">
            <img className="popupemfb_facebook-img" src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-facebook-icon-isolated-white-background-social-media-icon-facebook-icon-134700832.jpg" alt=""/>
          <button className="popupemfb_facebook-btn">Login with Facebook</button>
        </div>
        {/* <div className="popupemfb_facebook">
          <GoogleLogin className="popupemfb_facebook-btn"
            clientId="41263349064-khfbb8h5h0mlaoiehf9gmrg83d69jfig.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </div> */}
        </a>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupEmFb;
