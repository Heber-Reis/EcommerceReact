
import Home from "../src/components/Home/Home";
import Footer from "../src/components/Footer/Footer";
import { ItemsCart } from "../src/context/ItemsCart";
import { useState } from "react";

function HomePage () {

  const [totalItems, setItemscart] = useState([]);

  const addItemCart = (item) => {
    setItemscart(item);
  }

  return(
    <ItemsCart.Provider value={{totalItems, setItem: addItemCart}}>
      <Home/>
      <Footer/>
    </ItemsCart.Provider>
  )
}

export default HomePage;