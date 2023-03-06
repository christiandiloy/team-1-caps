import Home from './home';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './404';
import Login from './login';
import Register from './registration';
import ForgotPassword from './forgot-password';
import TermsOfService from './Terms-of-service';
import Aegis from './components/Aegis';
import GeekvapeU from './components/geekvape-u';
import GeekvapeZ from './components/geekvape-z';
import Wenax from './components/wenax';
import Obelisk from './components/obelisk';
import Coils from './components/coils';
import FAQ from './components/Support/FAQ';
import AboutUs from './components/Support/About-us';
import Store from './store/store';
import AllProducts from './store/navigation/all-products';
import BoxMod from './store/navigation/box-mod';
import ReplacementPods from './store/navigation/replacement-pods';
import ReplacementCoils from './store/navigation/replacement-coils';
import ContactUsNow from './contact-us';
import MyCart from './store/cart/cart';
import ItemPage from './store/item-page';



const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/aegis" element={<Aegis/>}/>
          <Route path="/geekvape-u" element={<GeekvapeU/>}/>
          <Route path="/geekvape-z" element={<GeekvapeZ/>}/>
          <Route path="/wenax" element={<Wenax/>}/>
          <Route path="/obelisk" element={<Obelisk/>}/>
          <Route path="/coils" element={<Coils/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUsNow/>}/>
        </Route>

        <Route path="/store" element={<Store/>}>

        <Route path="/store/item-page/:itemId" element={<ItemPage />} />
          <Route path="/store/all-products" element={<AllProducts/>}/>
          <Route path="/store/box-mods" element={<BoxMod/>}/>
          <Route path="/store/replacement-pods" element={<ReplacementPods/>}/>
          <Route path="/store/replacement-coils" element={<ReplacementCoils/>}/>
          <Route path="/store/my-cart" element={<MyCart />}/>

        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/terms-of-service" element={<TermsOfService/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
