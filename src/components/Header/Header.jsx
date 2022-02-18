import styles from "./style.module.css";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import { useState } from "react";


function Header ({avatar, itemsTotal, ResponsiveMenu}) {

  const [showCart, setShowcart] = useState(false);

  return(
    <div className={styles.Content}>
      <button className={styles.ResponsiveMenu}
              onClick={ResponsiveMenu}>
        <img src="/images/icon-menu.svg"/>
      </button>
      <div className={styles.Logo}>
        <a href="/"><img src="/images/logo.svg" width="100%"/></a>
      </div>
      <div className={styles.NavBar}>
        <div className={styles.Menu}><Menu /></div>
        <div className={styles.clientContent}>
          <div className={styles.cart}>
            <div className={styles.ItemsCart}>
              {
                itemsTotal > 0 && <>{itemsTotal}</>
              }
            </div>
            <button className={styles.Button} onClick={() => setShowcart(!showCart)}><img src="/images/icon-cart.svg" /></button>    
          </div>          
          <img src={`/images/${avatar}`} width="40px" />
        </div>
      </div>
      {
        showCart && 
        <Cart/>
      }
    </div>
  )
}

export default Header;