import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Collection from "../pages/Collection";
import PlaceOrder from "../pages/PlaceOrder";
import Order from "../pages/Order";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { Toaster } from "react-hot-toast";

const Routs = () => {
  return (
    <div className="px-4 sm:px-[7vw] lg:px-[9vw] capitalize">
      <Navbar></Navbar>
      <SearchBar></SearchBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/product/:productId" element={<Product></Product>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* <Route path="/profile" element={<Profile></Profile>}></Route> */}
        <Route path="/collection" element={<Collection></Collection>}></Route>
        <Route path="/place-order" element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Routs;
