import HomePage from "./pages/HomePage/HomePage";
import WorkPage from "./pages/ContactPage/ContactPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";

export const routes = [
  {
    path: "/",
    component: <HomePage />,
    exact: true,
  },
  {
    path: "/work",
    component: <WorkPage />,
    exact: true,
  },
  {
    path: "/propos",
    component: <AboutPage />,
    exact: true,
  },
  {
    path: "/contact",
    component: <ContactPage />,
    exact: true,
  },
];
