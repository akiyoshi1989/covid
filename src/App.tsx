import "./App.css";
import { Route, Routes } from "react-router-dom";
import { InfectedSingleCountry } from "./views/InfectedSingleCountry";
import { InfectedWholeWorld } from "./views/InfectedWholeWorld";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<InfectedSingleCountry />} />
        <Route path="/world" element={<InfectedWholeWorld />} />
      </Routes>
    </>
  );
}

export default App;
