import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Settings from './pages/Settings'

function Error() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-8xl font-bold text-red-900">404: Page not found!</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
