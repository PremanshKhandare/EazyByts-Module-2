import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EducationalResources from "./EducationalResources";
import TradingDashboard from "./TradingDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TradingDashboard />} />
        <Route path="/educational-resources" element={<EducationalResources />} />
      </Routes>
    </Router>
  );
}

export default App;
