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

let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
});

function App() {
  const [searchResults, setSearchResults] = "";

  const search = async (string) => {
    if (string.length > 2) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            string,
          {
            method: "GET",
            headers,
          }
        );

        let result = await response.json();
        let songs = result.data;

        setSearchResults(songs);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Router>
      <div className="App">
        <Sidebar />

        <Route
          path="/"
          exact
          render={() => <Home searchResults={searchResults} />}
        />
        <Route path="/Artist/:id" component={Artist} />
        <Route path="/Album/:id" component={Album} />
        {/* <FormLogin /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
