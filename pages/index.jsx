
import Home from "../src/components/Home/Home";
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
    </ItemsCart.Provider>
  )
}

export default HomePage;