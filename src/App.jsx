import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import BlogDetail from "./components/BlogDetail";

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Div */}

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
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
