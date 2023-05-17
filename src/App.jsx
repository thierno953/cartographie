import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/scrollToTop";
import Navigation from "./components/Navigation/Navigation";
import { routes } from "./routes";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
