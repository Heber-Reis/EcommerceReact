import styles from "./style.module.css";

function Cart ({ImageProduct, Title, Price, Quantity}) {
  return(
    <div className={styles.Cart}>
      <p className={styles.CartTitle}>Cart</p>
      <div className={styles.Items}>
        {
          ((Quantity != undefined) && (Quantity != 0)) &&
            <div className={styles.ItemInfo}>
              <img src={`/images/${ImageProduct}-thumbnail.jpg`} width={"40px"} />
              <div className={styles.Info}>
                <p>{Title}</p>
                <p>R$ {Price} x {Quantity} <span className={styles.FinalPrice}> R$ {Price * Quantity}</span></p>
              </div>
              <button className={styles.Delete}><img src={"/images/icon-delete.svg"} /></button>
            </div>
        }
        {
          ((Quantity === undefined) || (Quantity === 0)) && 
              <div className={styles.Empty}>Your Cart is empty</div>
        }
      </div>

    </div>
  )
}

export default Cart;