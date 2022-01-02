import { Routes, Route } from "react-router-dom";
import Table from "./Logins";
import Main from "./Main";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/boluwatife" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App