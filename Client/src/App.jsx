import { useState, useEffect } from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/about.jsx";
import Detail from "./views/Detail.jsx";
import ErrorPage from "./views/ErrorPage.jsx";
import Login from "./views/Login.jsx";
import "./App.css";
import Favorites from "./components/Favorites.jsx";

//*https://rym2-production.up.railway.app/api/character/$%7Bid%7D?key=henrym-

function App() {
  const location = useLocation({});
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);

  async function loginHandler(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";

      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );

      const { access } = data;
      setAccess(data);
      access && navigate("/home");

    } catch (error) {
      alert(error);
    }
  }

  function logoutHandler() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  }

  function onClose(id) {
    //VERSION GAMA
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(filteredCharacters);

    //VERSION ELIAN
    // setCharacters(
    //    characters.filter((character) => {
    //       return character.id !== Number(id)
    //    })
    // );
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      onSearch(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className="App">
      {location.pathname === "/" ? null : (
        <Nav
          onSearch={onSearch}
          Logout={logoutHandler}
          randomize={randomHandler}
          setAccess={setAccess}
          test={characters}
        />
      )}

      <Routes>
        <Route path="/" element={<Login login={loginHandler} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
