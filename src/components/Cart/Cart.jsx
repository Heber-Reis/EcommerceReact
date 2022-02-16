import styles from "./style.module.css";

import { ItemsCart } from "../../context/ItemsCart";
import { useContext } from "react";

function Cart ({ImageProduct, Title, Price}) {

  const { totalItems } = useContext(ItemsCart);
  return(
    <div className={styles.Cart}>
      <p className={styles.CartTitle}>Cart</p>
      <div className={styles.Items}>
        {
          (totalItems != 0) &&
            <div className={styles.ItemInfo}>
              <img src={`/images/${ImageProduct}-thumbnail.jpg`} width={"40px"} />
              <div className={styles.Info}>
                <p>{Title}</p>
                <p>R$ {Price} x {totalItems} <span className={styles.FinalPrice}> R$ {Price * totalItems}</span></p>
              </div>
              <button className={styles.Delete}><img src={"/images/icon-delete.svg"} /></button>
            </div>
        }
        {
          (totalItems === 0) && 
              <div className={styles.Empty}>Your Cart is empty</div>
        }
      </div>

    </div>
  )
}

export default Cart;