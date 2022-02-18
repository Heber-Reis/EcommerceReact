import styles from "./style.module.css";

import { ItemsCart } from "../../context/ItemsCart";
import { useContext } from "react";

function Cart () {

  const { totalItems, setItem } = useContext(ItemsCart);

  const finalPrice = 0;
 
  const deleteItem = (pos) =>{
    const items = [...totalItems]
    items.splice(pos,1)
    setItem(items)
  } 

  return(
    <div className={styles.Cart}>
      <p className={styles.CartTitle}>Cart</p>
      <div className={styles.Items}>
        {
          (totalItems.length != 0) &&
          totalItems.map((item, pos) => 
            <div key={pos} className={styles.ItemInfo}>
              <img src={`/images/${item.info.imagesFolder}/image-product-1-thumbnail.jpg`} width={"40px"} />
              <div className={styles.Info}>
                <p>{item.info.Title}</p>
                <p>R$ {finalPrice = (item.info.Price * (1 - item.info.Discount)).toFixed(2)} x {item.total} 
                  <span className={styles.FinalPrice}> R$ {(finalPrice * item.total).toFixed(2)}</span>
                </p>
              </div>
              <button className={styles.Delete}
                      onClick={() => deleteItem(pos)}>
                  <img src={"/images/icon-delete.svg"} />
              </button>
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