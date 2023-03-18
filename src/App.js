import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./404";
import Login from "./login";
import ForgotPassword from "./forgot-password";
import TermsOfService from "./Terms-of-service";
import Store from "./store/store";
import AllProducts from "./store/navigation/all-products";
import BoxMod from "./store/navigation/box-mod";
import ReplacementPods from "./store/navigation/replacement-pods";
import ReplacementCoils from "./store/navigation/replacement-coils";
import MyCart from "./store/cart/cart";
import AegisBonusKit from "./store/item-page/AegisBonusKit";
import AegisMax from "./store/item-page/AegisMax";
import AegisBoostPro from "./store/item-page/AegisBoostPro";
import AegisHero from "./store/item-page/AegisHero";
import Aegis1FCPodKit from "./store/item-page/Aegis1FCPodKit";
import GVH45 from "./store/item-page/GVH45";
import GVLegend200 from "./store/item-page/GVLegend200";
import GVNano from "./store/item-page/GVNano";
import GVOne from "./store/item-page/GVOne";
import AegisXGVZKit from "./store/item-page/AegisXGVZKit";
import GVAP2 from "./store/item-page/GVAP2";
import GVB60 from "./store/item-page/GVB60";
import GVB10021700Kit from "./store/item-page/GVB10021700Kit";
import GVB100Kit from "./store/item-page/GVB100Kit";
import GVE100E100iKit from "./store/item-page/GVE100E100iKit";
import GVL200Classic from "./store/item-page/GVL200Classic";
import BoxModKits from "./store/navigation/box-mod-kits";
import PodKits from "./store/navigation/pod-kits";
import Profile from "./Profile";
import "react-toastify/dist/ReactToastify.css";

const App = (props) => {
  try {
    const currentTime = new Date();
    const expiryDate = JSON.parse(localStorage.expiryDate);
    if (currentTime.getTime() > expiryDate.time) {
      localStorage.clear();
      window.location.reload();
    }
  } catch (error) {}
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Store />}>
        <Route path="/item-page/AegisBonusKit" element={<AegisBonusKit />} />
        <Route path="/item-page/AegisMax" element={<AegisMax />} />
        <Route path="/item-page/AegisBoostPro" element={<AegisBoostPro />} />
        <Route path="/item-page/AegisHero" element={<AegisHero />} />
        <Route path="/item-page/Aegis1FCPodKit" element={<Aegis1FCPodKit />} />
        <Route path="/item-page/GVH45" element={<GVH45 />} />
        <Route path="/item-page/GVLegend200" element={<GVLegend200 />} />
        <Route path="/item-page/GVNano" element={<GVNano />} />
        <Route path="/item-page/GVOne" element={<GVOne />} />
        <Route path="/item-page/AegisXGVZKit" element={<AegisXGVZKit />} />
        <Route path="/item-page/GVAP2" element={<GVAP2 />} />
        <Route path="/item-page/GVB60" element={<GVB60 />} />
        <Route path="/item-page/GVB10021700Kit" element={<GVB10021700Kit />} />
        <Route path="/item-page/GVB100Kit" element={<GVB100Kit />} />
        <Route path="/item-page/GVE100E100iKit" element={<GVE100E100iKit />} />
        <Route path="/item-page/GVL200Classic" element={<GVL200Classic />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/box-mods" element={<BoxMod />} />
          <Route path="/replacement-pods" element={<ReplacementPods />} />
          <Route path="/replacement-coils" element={<ReplacementCoils />} />
          <Route path="/box-mod-kits" element={<BoxModKits />} />
          <Route path="/pod-kits" element={<PodKits />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
