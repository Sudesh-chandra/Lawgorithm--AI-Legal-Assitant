import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Loading from './components/shared/Loading';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/shared/ProtectedRoute';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Chatbot = lazy(() => import('./pages/Chatbot'));
const Documents = lazy(() => import('./pages/Documents'));
const Lawyers = lazy(() => import('./pages/Lawyers'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="documents" element={<Documents />} />
          <Route path="lawyers" element={<Lawyers />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;