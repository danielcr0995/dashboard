import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product"

function App() {
  return (
    // <div className="App">
    <Router>
      <Topbar/>
      <div className="container">      
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}>
          {/* User list */}
          </Route>
          <Route path="/users" element={<UserList/>}>
            
          </Route>
          <Route path="/users/:userId" element={<User/>}>
            
          </Route>
          <Route path="/users/newUser" element={<NewUser/>}></Route>
          {/* Products list */}
          <Route path="/products" element={<ProductList/>}>
            
          </Route>
          <Route path="/products/:productId" element={<Product/>}>
            
          </Route>
          <Route path="/products/newProduct" element={<NewUser/>}></Route>
        </Routes>
      </div>   
    </Router>
      
    // {/* </div> */}
  );
}

export default App;
