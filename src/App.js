import "./App.css";
import Navlink from "./components/Navbar/Navlink";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <div className="home">
        <Navlink />
        <Main />
      </div>
    </div>
  );
}

export default App;
