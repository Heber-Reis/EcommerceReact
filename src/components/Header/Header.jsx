import styles from "./style.module.css";
import Menu from "../Menu/Menu";

function Header ({avatar, itemsTotal, ResponsiveMenu}) {

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
            <a href="#"><img src="/images/icon-cart.svg" /></a>
          </div>
          <img src={`/images/${avatar}`} width="40px" />
        </div>
      </div>

    </div>
  )
}

export default Header;