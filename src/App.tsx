import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import AuthenticationLayout from './layouts/AuthenticationLayout';
import GameLayout from './layouts/GameLayout';
import Dashboard from './components/Dashboard/Dashboard';
import Game from './components/Game/Game';
import Login from './components/Authentication/Login';
import Registration from './components/Authentication/Registration';
import Test from './components/Test/Test';
import BarleyBreakGame from './components/barley-break game/BarleyBreakGame';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/game" element={<GameLayout />}>
        <Route path=":id" element={<Game />} />
      </Route>
      <Route path="/auth" element={<AuthenticationLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
      <Route path="/barley-break" element={<BarleyBreakGame />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
