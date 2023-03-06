import Main from "./Main/Main";
import "./App.css";
import AppNavBar from "./AppNavBar/AppNavBar";
import IndexWelcome from "./IndexWelcome/IndexWelcome";
import { Route, Routes } from "react-router-dom";
import Cocktail from "./Cocktail/Cocktail";
import NoMatch404 from "./NoMatch404/NoMatch404";

const App = () => {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route index element={<IndexWelcome />} />
        <Route path="cocktails" element={<Main />} />
        <Route path="cocktails/:cocktail" element={<Cocktail />} />
        <Route path="*" element={<NoMatch404 />} />
      </Routes>
    </>
  );
};

export default App;
