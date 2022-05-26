import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import RequireAuth from "./Pages/Login/Required Auth/RequiredAuth";
import NotFound from "./Pages/Shared/Not Found/NotFound";
import AboutUs from "./Pages/About Us/AboutUs";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Blogs from "./Pages/Blog/Blog";
import Additem from "./Pages/Add item/Additem";
import Myitem from "./Pages/My items/Myitems";
import Manageitem from "./Pages/Manage Item/ManageItem";
import Inventory from "./Pages/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        {/* Inventory */}

        <Route
          path="/item/:itemId"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>

        {/* Add item */}

        <Route
          path="/additem"
          element={
            <RequireAuth>
              <Additem></Additem>
            </RequireAuth>
          }
        ></Route>

        {/* My Items */}

        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <Myitem></Myitem>
            </RequireAuth>
          }
        ></Route>

        {/* Manage Items */}

        <Route
          path="/manageitem"
          element={
            <RequireAuth>
              <Manageitem></Manageitem>
            </RequireAuth>
          }
        ></Route>

        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
