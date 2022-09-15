import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import CartPage from "./pages/CartPage"
import LoginPage from "./pages/LoginPage"
import ProductList from "./pages/ProductList"
import RegisterPage from "./pages/RegisterPage"
import ProductsDetailsPage from "./pages/ProductsDetailsPage"
import UserProfilePage from './pages/user/UserProfilePage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrderDetails from './pages/user/UserOrderDetails';
import UserOrdersPage from './pages/user/UserOrdersPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';

// protected admin pages:
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import UserChatComponent from './components/user/UserChatComponent';

import RoutesWithChatComponent from "./components/RoutesWithChatComponent"


function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithChatComponent />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product-list" element={<ProductList />}></Route>
        <Route path="/product-details" element={<ProductsDetailsPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="*" element="page not exist 404"></Route>

        <Route element={<ProtectedRoutesComponent />}>

        

          <Route path="/user" element={<UserProfilePage />}></Route>
          <Route path="/user/my-orders" element={<UserOrdersPage />}></Route>
          <Route path="/user/cart" element={<UserCartDetailsPage />}></Route>
          <Route path="/user/order-details" element={<UserOrderDetails />}></Route>

        </Route>
        </Route>

        {/* admin protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      
      </Routes>
      <FooterComponent />

      

    </Router>
  );
}

export default App;
