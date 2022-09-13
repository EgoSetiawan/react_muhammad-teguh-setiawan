import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";

function App() {
  return (
    <div className="App">
      <div className="home-background">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
