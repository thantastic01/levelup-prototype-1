import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Demo from './pages/Demo.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import { Aurora, Grain } from './components/Ambient.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Aurora />
      <Grain />
      <div className="route-fade">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </div>
    </div>
  )
}
