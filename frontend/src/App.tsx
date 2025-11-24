import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from '@/pages/AuthPage'
import DashboardPage from '@/pages/DashboardPage'
import ProjectsPage from '@/pages/ProjectsPage'
import ProtectedRoute from '@/components/routes/ProtectedRoute'
import PublicRoute from '@/components/routes/PublicRoute'
import { useIsAuthenticated } from '@/store/authStore'

function App() {
  const isAuthenticated = useIsAuthenticated()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
