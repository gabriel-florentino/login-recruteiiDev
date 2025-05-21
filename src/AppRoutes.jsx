import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Login, Register, RecoverPassword } from './features/auth';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperar-senha" element={<RecoverPassword />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function AppRoutes() {
  return (<AnimatedRoutes />);
}
