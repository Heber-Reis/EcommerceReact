import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import styles from "./style.module.css";

import Header from "../Header/Header";
import ItemImage from "../ItemImage/ItemImage";
import Menu from "../Menu/Menu";
import Info from "../Informations/Info";

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
            <div className="Button">
            <button onClick={() => setResponsivemenu(!responsiveMenu)}
                    className={styles.CloseButton}>
              <img src={"/images/icon-close.svg"}/>
            </button>
            </div>
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
          <div className={styles.info}>
            <Info
              title={"Fall Limited Edition Sneakers"}
              description={"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, theyll withstand everything the weather can offer."}
              price={250}
              discount={0.5}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;