import Footer from "components/layout/Footer";
import Navbar from "components/layout/Navbar";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
