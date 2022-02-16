import { BsCart3 } from "react-icons/bs";

import styles from "./style.module.css";
import Button from "../Button/Button";
import { useState, useContext } from "react";
import { ItemsCart } from "../../context/ItemsCart"

function AddCart ({setProps}) {

  const [Quantity, setQuantity] = useState(0);
  const { setItem } = useContext(ItemsCart);

  return(
    <div className={styles.AddCart}>
      <div className={styles.Quantity}>
        <button className={styles.BtnQnt}
                onClick={() => 
                  Quantity != 0 && setQuantity(Quantity-1)
                }
        >-</button>
        <p>{Quantity}</p>
        <button className={styles.BtnQnt}
                onClick={() => setQuantity(Quantity+1)}
        >+</button>
      </div>
      <Button icon={<BsCart3 fill="white" />}
              onClick={() => setItem(Quantity)}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default AddCart;

