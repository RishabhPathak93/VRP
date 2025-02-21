import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Home from "./pages/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import BlogDetail from "./components/BlogDetail";
import Login from "./pages/Login"; // Import Login component
import Signup from "./pages/Signup"; // Import Signup component

const App = () => {
  return (
    <div className="relative min-h-screen">
    
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />  {/* Login Page */}
            <Route path="/signup" element={<Signup />} />  {/* Signup Page */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
