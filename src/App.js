import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Shop from './Components/Shop/Shop';
import Furniture from './Components/Categories/Furniture/Furniture';
import Clocks from './Components/Categories/Clocks/Clocks';
import Lights from './Components/Categories/Lights/Lights';
import Toys from './Components/Categories/Toys/Toys';
import Accessories from './Components/Categories/Accessories/Accessories';
import AllCategories from './Components/Categories/AllCategories/AllCategories';
import NotFound from './Components/NotFound/NotFound';
import MenuBar from './Components/Shared/MenuBar/MenuBar';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import Orders from './Components/Dashboard/Orders/Orders';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import ManageProduct from './Components/Dashboard/ManageProduct/ManageProduct';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ReviewAdding from './Components/Dashboard/ReviewAdding/ReviewAdding';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Components/Login/Login/Login';
import Registration from './Components/Login/Registration/Registration';
import AllProducts from './Components/Home/AllProducts/AllProducts';
import Footer from './Components/Home/Footer/Footer';

function App() {
    return (
        <div className="App">
            <MenuBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} >
                    <Route path="/home" element={<AllCategories />} />
                    <Route path="furniture" element={<Furniture />} />
                    <Route path="clocks" element={<Clocks />} />
                    <Route path="lights" element={<Lights />} />
                    <Route path="toys" element={<Toys />} />
                    <Route path="accessories" element={<Accessories />} />
                </Route>
                <Route path="shop" element={<Shop />} />
                <Route path="productdetails/:id" element={<ProductDetails />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path="/dashboard" element={<DashboardHome />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="review" element={<ReviewAdding />} />
                    <Route path="addProduct" element={<AddProduct />} />
                    <Route path="manageProducts" element={<ManageProduct />} />
                    <Route path="makeAdmin" element={<MakeAdmin />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
