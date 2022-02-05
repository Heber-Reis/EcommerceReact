import { useState } from "react";

import styles from "./style.module.css";

import Header from "../Header/Header";
import ItemImage from "../ItemImage/ItemImage";

function Home () {

  const [totalItems, setTotalitems] = useState(2)
  const [showPopup, setShowpopup] = useState(false)

  const images = ["image-product-1","image-product-2","image-product-3","image-product-4"];

  return(
    <div className={styles.Page}>
      {
        showPopup &&       
        <div className={styles.PopupImage}>
          <button className={styles.Close} onClick={() => setShowpopup(!showPopup)}>
            <img src="/images/icon-close.svg"/>
          </button>
          <ItemImage images={images} popup={true}/>
        </div>
      }
      <Header 
        avatar={"image-avatar.png"}
        itemsTotal={totalItems}
      />

      <div className={styles.Content}>
        <ItemImage images={images} onClick={() => setShowpopup(!showPopup)}/>
        <div className={styles.info}></div>
      </div>
      

      
    </div>
  )
}

export default Home;