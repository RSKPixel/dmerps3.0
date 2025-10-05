import { useState } from 'react';
import BaseTemplate from './template/BaseTemplate';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './template/AuthContext';

function App() {
  const api = import.meta.env.VITE_API_URL;
  const [loggedIn, setLoggedIn] = useState(false);

  const provider = {
    api,
    loggedIn,
    setLoggedIn,
  };

  return (
    <div>
      <Router>
        <AuthContext.Provider value={provider}>
          <BaseTemplate>
            <Routes>
              <Route path="/" element={<BaseTemplate />} />
            </Routes>
          </BaseTemplate>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
