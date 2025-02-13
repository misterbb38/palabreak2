// App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Récupère la préférence enregistrée ou utilise la préférence système
    const savedMode = localStorage.getItem("darkMode");
    return savedMode
      ? JSON.parse(savedMode)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Met à jour la classe sur le document.documentElement pour Tailwind Dark Mode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Sauvegarde la préférence
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div>
      {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <LandingPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
