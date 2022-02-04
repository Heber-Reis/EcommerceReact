import { useState } from "react";
import Header from "../Header/Header";
import ItemImage from "../ItemImage/ItemImage";

function Home () {

  const [totalItems, setTotalitems] = useState(2)

  const images = ["image-product-1","image-product-2","image-product-3","image-product-4"];

  return(
    <div>
      <Header 
        avatar={"image-avatar.png"}
        itemsTotal={totalItems}
      />
      <ItemImage images={images}/>
      
    </div>
  )
}

export default Home;