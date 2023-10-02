import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/HomePage';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route Component={HomePage} path='/'/>
        <Route Component={SignupPage} path='/signup'/>
        <Route Component={LoginPage} path='/login'/>
        <Route path="*" element={<NotFoundPage />} />
      
      </Routes>
    </Router>
  </>
  );
}

export default App;
