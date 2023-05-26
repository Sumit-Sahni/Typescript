import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from  "./scenes/hero/Index"
import Products from "@/scenes/product/index"
import Cart from "./scenes/cart";

function App() {
 

  return (
   <>
      <Router>
      <Routes>
          <Route  path="/"  element={<Main/>}/>
          <Route  path="/products"  element={<Products/>}/>
          <Route  path="/cart"  element={<Cart/>}/>
      </Routes>
     </Router>
   </>
    
  )
}

export default App
