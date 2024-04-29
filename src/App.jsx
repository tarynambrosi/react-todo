import Navigation from "./components/Routing/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import ToDos from "./components/ToDos/ToDos";
import About from "./components/About/About";
import AuthProvider from "./contexts/AuthContext";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./components/Routing/ProtectedRoute";
import Login from "./components/Auth/Login";
import Footer from "./components/Routing/Footer";
import './App.css'

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/todos" element={<ProtectedRoute><ToDos /></ProtectedRoute>} />
          <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
      </AuthProvider>
    </div>
  )
}