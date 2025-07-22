import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Recettes from './Recettes';
import RecetteDetail from './RecetteDetail';
import AjouterRecette from './pages/AjouterRecette';
import CrepesDetail from './pages/CrepesDetail';
import RecettesSucrees from './pages/RecettesSucrees';
import RecetteSucreeDetail from './pages/RecetteSucreeDetail';
import Apropos from './pages/Apropos';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <>
      {isAuthenticated && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/recettes"
          element={
            <PrivateRoute>
              <Recettes />
            </PrivateRoute>
          }
        />
        <Route
          path="/recette/:id"
          element={
            <PrivateRoute>
              <RecetteDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/ajouter-recette"
          element={
            <PrivateRoute>
              <AjouterRecette />
            </PrivateRoute>
          }
        />
        <Route
          path="/recette-crepes"
          element={
            <PrivateRoute>
              <CrepesDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/recettes-sucrees"
          element={
            <PrivateRoute>
              <RecettesSucrees />
            </PrivateRoute>
          }
        />
        <Route
          path="/recette-sucree/:id"
          element={
            <PrivateRoute>
              <RecetteSucreeDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/apropos"
          element={
            <PrivateRoute>
              <Apropos />
            </PrivateRoute>
          }
        />
      </Routes>

      {isAuthenticated && (
        <footer style={{
          backgroundColor: '#6D4C41',
          color: '#FFF3E0',
          textAlign: 'center',
          padding: '1rem 0',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          fontWeight: 'bold',
          fontSize: '1rem',
          zIndex: 1000,
        }}>
          © Itshak 2025 Miam & Partage - Fait avec ❤ pour les gourmands
        </footer>
      )}
    </>
  );
}

export default App;