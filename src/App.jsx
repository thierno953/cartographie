import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/scrollToTop";
import Navigation from "./components/Navigation/Navigation";
import { routes } from "./routes";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AfghansBeguinage from "./components/Details/posts/afghansBeguinage/AfghansBeguinage";
import {
  afgSteCroix,
  afghansBeguinage,
  afghansCharleroi,
  afghansPost,
  afghansTrone,
  balmoral,
  ebola,
  gecamines,
  lhosp,
  mdmBailli,
  mdmPrinceRoyale,
  mdmSaintMarie,
  philomene,
  pmJanBloc,
  vspAma,
  vspDim,
  vspHotel,
  vspLeo,
  vspMart,
  vspOlivier,
  vspRous,
  vspTous,
  zoneNeutre,
} from "./components/data";
import AfghanPost from "./components/Details/posts/AfghanPost/AfghanPost";
import AfghansCharleroi from "./components/Details/posts/AfghansCharleroi/AfghansCharleroi";
import AfghansTrone from "./components/Details/posts/AfghansTrone/AfghansTrone";
import AfgSteCroix from "./components/Details/posts/AfgSteCroix/AfgSteCroix";
import Balmoral from "./components/Details/posts/Balmoral/Balmoral";
import Ebola from "./components/Details/posts/Ebola/Ebola";
import Gecamines from "./components/Details/posts/Gecamines/Gecamines";
import Lhosp from "./components/Details/posts/Lhosp/Lhosp";
import MdmBailli from "./components/Details/posts/MdmBailli/MdmBailli";
import MdmPrinceRoyale from "./components/Details/posts/MdmPrinceRoyale/MdmPrinceRoyale";
import MdmSaintMarie from "./components/Details/posts/MdmSaintMarie/MdmSaintMarie";
import Philomene from "./components/Details/posts/Philomene/Philomene";
import PmJanBloc from "./components/Details/posts/PmJanBloc/PmJanBloc";
import VspAma from "./components/Details/posts/VspAma/VspAma";
import VspDim from "./components/Details/posts/VspDim/VspDim";
import VspHotel from "./components/Details/posts/VspHotel/VspHotel";
import VspLeo from "./components/Details/posts/VspLeo/VspLeo";
import VspMart from "./components/Details/posts/VspMart/VspMart";
import VspOlivier from "./components/Details/posts/VspOlivier/VspOlivier";
import VspRous from "./components/Details/posts/VspRous/VspRous";
import VspTous from "./components/Details/posts/VspTous/VspTous";
import ZoneNeutre from "./components/Details/posts/ZoneNeutre/ZoneNeutre";
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
          <Route
            path="/posts/afghansBeguinage"
            element={<AfghansBeguinage afghansBeguinage={afghansBeguinage} />}
          />
          <Route
            path="/posts/afghansPost"
            element={<AfghanPost afghansPost={afghansPost} />}
          />
          <Route
            path="/posts/afghansCharleroi"
            element={<AfghansCharleroi afghansCharleroi={afghansCharleroi} />}
          />
          <Route
            path="/posts/afghansTrone"
            element={<AfghansTrone afghansTrone={afghansTrone} />}
          />
          <Route
            path="/posts/afgSteCroix"
            element={<AfgSteCroix afgSteCroix={afgSteCroix} />}
          />
          <Route
            path="/posts/balmoral"
            element={<Balmoral balmoral={balmoral} />}
          />
          <Route path="/posts/ebola" element={<Ebola ebola={ebola} />} />
          <Route
            path="/posts/gecamines"
            element={<Gecamines gecamines={gecamines} />}
          />
          <Route path="/posts/lhosp" element={<Lhosp lhosp={lhosp} />} />
          <Route
            path="/posts/mdmBailli"
            element={<MdmBailli mdmBailli={mdmBailli} />}
          />
          <Route
            path="/posts/mdmPrinceRoyale"
            element={<MdmPrinceRoyale mdmPrinceRoyale={mdmPrinceRoyale} />}
          />
          <Route
            path="/posts/mdmSaintMarie"
            element={<MdmSaintMarie mdmSaintMarie={mdmSaintMarie} />}
          />
          <Route
            path="/posts/philomene"
            element={<Philomene philomene={philomene} />}
          />
          <Route path="/posts/vspAma" element={<VspAma vspAma={vspAma} />} />
          <Route path="/posts/vspDim" element={<VspDim vspDim={vspDim} />} />
          <Route
            path="/posts/vspHotel"
            element={<VspHotel vspHotel={vspHotel} />}
          />
          <Route path="/posts/vspLeo" element={<VspLeo vspLeo={vspLeo} />} />
          <Route
            path="/posts/vspMart"
            element={<VspMart vspMart={vspMart} />}
          />
          <Route
            path="/posts/vspOlivier"
            element={<VspOlivier vspOlivier={vspOlivier} />}
          />
          <Route
            path="/posts/vspRous"
            element={<VspRous vspRous={vspRous} />}
          />
          <Route
            path="/posts/vspTous"
            element={<VspTous vspTous={vspTous} />}
          />
          <Route
            path="/posts/zoneNeutre"
            element={<ZoneNeutre zoneNeutre={zoneNeutre} />}
          />
          <Route
            path="/posts/pmJanBloc"
            element={<PmJanBloc pmJanBloc={pmJanBloc} />}
          />
          {/* <Route
            path="/posts/mdmSteCat"
            element={<MdmSteCat mdmSteCat={mdmSteCat} />}
          /> */}
          {/* <Route
            path="/posts/groupeBateau"
            element={<GroupeBateau groupeBateau={groupeBateau} />}
          /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
