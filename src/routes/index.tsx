import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Activities from '../pages/activities';
import Profile from '../pages/profile';
import Evaluation from '../pages/evaluation';
import EvaluationView from '../pages/evaluation/view';
import ManagementPage from '../pages/management';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/evaluation/view" element={<EvaluationView />} />
        <Route path="/management" element={<ManagementPage />} />
      </Routes>
  );
};

export default App;
