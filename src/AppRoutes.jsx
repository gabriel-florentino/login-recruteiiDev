import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Login, Register, RecoverPassword, ResetPassword } from './features/auth';
import { RegisterDeveloper, RegisterEnterprise } from './features/registers';
import { AuthProvider } from "./context/AuthContext";
import {ProtectedRoute, PublicOnlyRoute, ErrorRoute} from "./routes"

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Rotas públicas, mas bloqueadas para usuários logados */}
        <Route
          path="/"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/cadastrar"
          element={
            <PublicOnlyRoute>
              <Register />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/recuperar-senha"
          element={
            <PublicOnlyRoute>
              <RecoverPassword />
            </PublicOnlyRoute>
          }
        />
        <Route path="/redefinir-senha" 
        element={
          <PublicOnlyRoute>
            <ResetPassword />
          </PublicOnlyRoute>
        } 
        />

        {/* Rotas privadas */}
        <Route
          path="/cadastrar-empresa"
          element={
            <ProtectedRoute only="empresa">
              <RegisterEnterprise />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cadastrar-desenvolvedor"
          element={
            <ProtectedRoute only="dev">
              <RegisterDeveloper />
            </ProtectedRoute>
          }
        />

        {/* Rota 404 */}
        
          <Route path="*" 
          element={
            <ErrorRoute/>
          } />
        
      </Routes>
    </AnimatePresence>
  );
}

export default function AppRoutes() {
  return (
    <AuthProvider>
      <AnimatedRoutes />
    </AuthProvider>
  );
}
