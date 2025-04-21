import React from 'react';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Registration } from './pages/Registration/Registration';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
const AuthRouters = () => (
  <Routes>
    <Route path="/auth" element={<LoginPage />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="*" element={<Navigate to="/auth" />} />
  </Routes>
);

const MainRoutes = () => (
  <Routes>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

function App() {
  const [isAuth] = React.useState(false);
  return <BrowserRouter>{isAuth ? <MainRoutes /> : <AuthRouters />}</BrowserRouter>;
}

export default App;
