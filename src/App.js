// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Artist from "./components/Artist";
import Album from "./components/Album";
// import FormLogin from "./components/FormLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <Route path="/Home" exact component={Home} />
        <Route path="/Artist/:id" component={Artist} />
        <Route path="/Album/:id" component={Album} />
        {/* <FormLogin /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
