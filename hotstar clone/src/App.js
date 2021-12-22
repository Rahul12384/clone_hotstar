import TitleBar from "./titlebar/TitleBar";
import SlidingImages from "./mainbody/SlidingImages";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__titlebar">
        <TitleBar/>
      </div>
      <div className="app__body">
        <SlidingImages/>
        <div className="app__body-inner"></div>
      {/* <h2>Let's get started!</h2> */}
      </div>
    </div>
  );
}

export default App;
