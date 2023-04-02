import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IndexPage from "./pages/IndexPage";
import Layout from "./pages/Layout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/portfolio-demo">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
