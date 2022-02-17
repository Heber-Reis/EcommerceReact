import styles from "./style.module.css";

import { ItemsCart } from "../../context/ItemsCart";
import { useContext } from "react";

function Cart ({ImageProduct, Title, Price}) {

  const { totalItems } = useContext(ItemsCart);
  console.log(totalItems)

  console.log(totalItems[0])
  return(
    <div className={styles.Cart}>
      <p className={styles.CartTitle}>Cart</p>
      <div className={styles.Items}>
        {
          (totalItems.length != 0) &&
          totalItems.map((item, pos) => 
            <div key={pos} className={styles.ItemInfo}>
              {console.log(item.total)}
              <img src={`/images/${ImageProduct}-thumbnail.jpg`} width={"40px"} />
              <div className={styles.Info}>
                <p>{Title}</p>
                <p>R$ {Price} x {item.total} <span className={styles.FinalPrice}> R$ {Price * item.total}</span></p>
              </div>
              <button className={styles.Delete}><img src={"/images/icon-delete.svg"} /></button>
            </div>
          )
        }
        {
          (totalItems.length === 0) && 
              <div className={styles.Empty}>Your Cart is empty</div>
        }
      </div>

    </div>
  )
}

export default Cart;