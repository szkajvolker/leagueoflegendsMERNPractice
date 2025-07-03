import { Routes, Route } from "react-router-dom";
import ChampionsPage from "./pages/ChampionsPage";
import StatisticsPage from "./pages/StatisticsPage";
import HomePage from "./pages/HomePage";
import ChampPage from "./pages/ChampPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all" element={<ChampionsPage />} />
      <Route path="/stats" element={<StatisticsPage />} />
      <Route path="/champ/:id" element={<ChampPage />} />
    </Routes>
  );
}

export default App;
