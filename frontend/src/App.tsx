import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from '@/pages/AuthPage'
import DashboardPage from '@/pages/DashboardPage'
import SidebarLayout from '@/components/layout/SidebarLayout'
import { useIsAuthenticated } from '@/store/authStore'

function App() {
  const isAuthenticated = useIsAuthenticated()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <AuthPage />}
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <SidebarLayout>
                <DashboardPage />
              </SidebarLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App