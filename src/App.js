import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Leftpanel from "./components/Leftpanel";
import Rightpenal from "./components/Rightpanel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <br></br>
      <br></br>

      <div className="panel">
        <Leftpanel />
        <Rightpenal />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
