import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';


import LoginPage from './View/LoginPage/LoginPage';
import HomePage from './View/HomePage/HomePage';
import { colors } from './Utils/Color';
import TodoPage from './View/TodoPage/TodoPage';




function App() {
  
  return (
    // <div className="App">
    //   <LoginPage/>

    // </div>
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/to-do" element={<TodoPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
