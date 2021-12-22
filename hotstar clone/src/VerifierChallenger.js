// import hmacSHA512 from "crypto-js/hmac-sha512";
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
import CryptoJS from "crypto-js";
import { useEffect } from "react";

// Dependency: Node.js crypto module
// https://nodejs.org/api/crypto.html#crypto_crypto
const VerifierChallenger = () => {
    function base64URLEncode(str) {
      return str
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    }
  //   var code_verifier = base64URLEncode(crypto.randomBytes(32));
  // var randomBytes=require('randomBytes')
  // console.log("random")
  // console.log(crypto.randomBytes(32))
  var wordArray = CryptoJS.lib.WordArray.random(32);
  var code_verifier = base64URLEncode(Base64.stringify(wordArray));
  // var code_verifier = base64URLEncode(wordArray);
  //   function sha256(buffer) {
  //     return crypto.createHash("sha256").update(buffer).digest();
  //   }
    // var code_challenger = base64URLEncode(sha256(code_verifier));
  var code_challenger = base64URLEncode(Base64.stringify(sha256(code_verifier)));
  console.log("code_verifier");
  console.log(code_verifier);
  console.log("code_challenger");
  console.log(code_challenger);
  // const SigninHandler=()=>{
  //   console.log("in handler")
  //   console.log(code_challenger)
  //   useEffect(() => {
  //     fetch(`https://dev-12u2388w.us.auth0.com/authorize?response_type=code&code_challenge=${code_challenger}&code_challenge_method=S256&client_id=UeOlj5xtXsESZ2PGctxyOPoz22ybghi3&redirect_uri=http://localhost:3000/&scope=openid%20profile&state=xyzABC123`)
  //     .then((res)=>{
  //       console.log(res)
  //     })
  //   })
  // }
  useEffect(() => {
    console.log("in useeffect verifierchallenger");
    console.log(typeof(code_challenger))
    const requestOptions = {
      method: "POST",
      mode:"no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 1, ve:code_verifier,ch:code_challenger })
    };
    // return(
      console.log("in return useeffect verifierchallenger");
    fetch("http://localhost:8080/rahu", requestOptions).then(response => console.log(response));
    // .then(data => console.log(data));
    // );
  }, [code_challenger,code_verifier]);
  return (
    //   <a href={`https://dev-12u2388w.us.auth0.com/authorize?
    //   response_type=code&
    //   code_challenge=${code_challenger}&
    //   code_challenge_method=S256&
    //   client_id=UeOlj5xtXsESZ2PGctxyOPoz22ybghi3&
    //   redirect_uri=http://localhost:3000/&
    //   scope=openid%20profile&
    //   state=xyzABC123`}>
    //   Sign In
    // </a>)
     console.log("before click sign in"),
    // {`https://dev-12u2388w.us.auth0.com/authorize?response_type=code&code_challenge=${code_challenger}&code_challenge_method=S256&client_id=UeOlj5xtXsESZ2PGctxyOPoz22ybghi3&redirect_uri=http://localhost:3000/&scope=openid%20profile&state=xyzABC123`}
    // <button onClick={SigninHandler}>Sign_in</button>

    <a href={`https://dev-12u2388w.us.auth0.com/authorize?response_type=code&code_challenge=${code_challenger}&code_challenge_method=S256&client_id=wplaaHT4M6bWFG1wmKdvKU6hPbFfWlOy&redirect_uri=http://localhost:3000/welcome&scope=openid%20profile%20offline_access&state=xyzABC123`}>Sign_in</a>
  );
};
export default VerifierChallenger;
