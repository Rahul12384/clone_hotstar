import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-12u2388w.us.auth0.com"
      clientId="UeOlj5xtXsESZ2PGctxyOPoz22ybghi3"
      redirectUri={'http://localhost:3000/welcome'}
      audience="https://dev-12u2388w.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
