import { BsCart3 } from "react-icons/bs";

import styles from "./style.module.css";
import Button from "../Button/Button";
import { useState, useContext } from "react";
import { ItemsCart } from "../../context/ItemsCart"

function AddCart () {

  const [Quantity, setQuantity] = useState(0);
  const { totalItems, setItem } = useContext(ItemsCart);

  const handleItems = () => {
    console.log('Entrei')
    setItem([...totalItems, {"total" : Quantity}])
  }

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
              onClick={handleItems}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default AddCart;

