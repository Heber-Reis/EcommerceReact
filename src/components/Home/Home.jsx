import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import styles from "./style.module.css";

import Header from "../Header/Header";
import ItemImage from "../ItemImage/ItemImage";
import Menu from "../Menu/Menu";

function Home() {

  const [totalItems, setTotalitems] = useState(2);
  const [showPopup, setShowpopup] = useState(false);
  const [responsiveMenu, setResponsivemenu] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const images = ["image-product-1", "image-product-2", "image-product-3", "image-product-4"];

  return (
    <div className={styles.Page}>
      {
        responsiveMenu && 
          <div className={styles.ResponsiveMenu}>
            <button onClick={() => setResponsivemenu(!responsiveMenu)}>
              <img src={"/images/icon-close.svg"}/>
            </button>
            <Menu/>
          </div>
      }    
      <div className={styles.Body}>
        <div className={classNames(styles.NoFilter,{[styles.Filter] : responsiveMenu})}></div>
        {
          showPopup &&
          <div className={styles.PopupImage}>
            <ItemImage images={images}
              popup={true}
              close={() => setShowpopup(!showPopup)}
            />
          </div>
        }
        <Header
          avatar={"image-avatar.png"}
          itemsTotal={totalItems}
          ResponsiveMenu={() => setResponsivemenu(!responsiveMenu)}
        />

        <div className={styles.Content}>
          <ItemImage images={images}
            onClick={() => setShowpopup(!showPopup)}
          />
          <div className={styles.info}></div>
        </div>
      </div>
    </div>
  )
}

export default Home;