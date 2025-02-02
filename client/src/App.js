import "./App.css";
import ShowProducts from "./components/ShowProduct";
import AddProduct from "./components/AddProduct";
import NavBarMenu from "./components/NavBarMenu";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <Router>
      <NavBarMenu />
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/:id/" element={<ProductDetail />} />
        <Route path="/:id/update" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
