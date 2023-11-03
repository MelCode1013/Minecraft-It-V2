import "./App.css";
import Homepage from "./components/Homepage";
import dotenv from "dotenv";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Homepage></Homepage>
      <Login></Login>
    </div>
  );
}

export default App;
