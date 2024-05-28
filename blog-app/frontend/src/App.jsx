import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogsPage from "./pages/BlogsPage";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/PageNotFound";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";


import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{/* <BlogsPage />
<CategoriesPage /> */}