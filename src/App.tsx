import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import WritePost from "./pages/WritePost";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
