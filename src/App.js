import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./404";
import Login from "./login";
import Register from "./registration";
import ForgotPassword from "./forgot-password";
import TermsOfService from "./Terms-of-service";
import AboutUs from "./components/Support/About-us";
import Store from "./store/store";
import AllProducts from "./store/navigation/all-products";
import BoxMod from "./store/navigation/box-mod";
import ReplacementPods from "./store/navigation/replacement-pods";
import ReplacementCoils from "./store/navigation/replacement-coils";
import MyCart from "./store/cart/cart";
import ItemPage from "./store/item-page";
import BoxModKits from "./store/navigation/box-mod-kits";
import PodKits from "./store/navigation/pod-kits";
import Profile from "./Profile";

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
      <Routes>
        <Route path="/" element={<Store />}>
          <Route path="/item-page/:itemId" element={<ItemPage />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/box-mods" element={<BoxMod />} />
          <Route path="/replacement-pods" element={<ReplacementPods />} />
          <Route path="/replacement-coils" element={<ReplacementCoils />} />
          <Route path="/box-mod-kits" element={<BoxModKits />} />
          <Route path="/pod-kits" element={<PodKits />} />
          <Route path="/store/my-cart" element={<MyCart />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
