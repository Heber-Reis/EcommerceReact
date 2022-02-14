import { BsCart3 } from "react-icons/bs";

import styles from "./style.module.css";

import Button from "../Button/Button";
import { useState } from "react";

function AddCart ({setProps}) {

  const [Quantity, setQuantity] = useState(0);

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
              onClick={() => setProps(Quantity)}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default AddCart;

