import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Global from "./components/global";
import Inthefutur from "./components/inthefutur";


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Global/>} />
          <Route path="/soon" element={<Inthefutur/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
