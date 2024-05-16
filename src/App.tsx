import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Dashboard from "./containers/Dashboard";
import Deposit from "./containers/Deposit";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <div className={styles.mainContent}>
          <Sidebar />
          <main className={styles.content}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/deposit" element={<Deposit />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
