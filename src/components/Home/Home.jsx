import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.css";

import Header from "../Header/Header";
import ItemImage from "../ItemImage/ItemImage";

function Home () {

  const [totalItems, setTotalitems] = useState(2)
  const [showPopup, setShowpopup] = useState(false)

  const isMobile = useMediaQuery({query: '(max-width: 600px)'});

  console.log(isMobile);

  const images = ["image-product-1","image-product-2","image-product-3","image-product-4"];

  return(
    <div className={styles.Page}>

      <Header 
        avatar={"image-avatar.png"}
        itemsTotal={totalItems}
        isMobile={isMobile}
      />

{
        showPopup &&       
        <div className={styles.PopupImage}>
          <ItemImage images={images} popup={true} close={() => setShowpopup(!showPopup)}/>
        </div>
      }
      <div className={styles.Content}>
        <ItemImage images={images} popup={isMobile} onClick={() => setShowpopup(!showPopup)}/>
        <div className={styles.info}></div>
      </div>


    </div>
  )
}

export default Home;