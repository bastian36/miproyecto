import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Productos from "./pages/Productos";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Boleta from "./pages/Boleta";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/products" element={<Productos />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/boleta" element={<Boleta />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
