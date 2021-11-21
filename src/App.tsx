import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import './App.css';
import {Dashboard} from "./containers"

function App() {
  return (
      <Router>
        <h1>Conceptual Virus Dashboard</h1>
          <Routes>
              <Route path="/" element={<Dashboard />} />
          </Routes>
      </Router>
  );
}

export default App;
