import styles from "./style.module.css";

import AddCart from "../AddCart/AddCart";
import { useEffect, useState } from "react";

function Info ({title, description, price, discount, setProps}) {

  const finalPrice = price * discount;
  const [Quantity, setQuantity] = useState(0);



  return(
    <div>
      <h3 className={styles.Company}>SNEACKER COMPANY</h3>
      <h1 className={styles.Title}>{title}</h1>
      <p className={styles.Description}>{description}</p>
      <div className={styles.Price}>
        <h1>{`R$ ${finalPrice}`}</h1>
        <p className={styles.Discount}>{`${discount*100}%`}</p>
      </div>
      <p className={styles.InitialPrice}>{`R$ ${price}`}</p>
      <AddCart setProps={setQuantity}/>
      {
        setProps(Quantity)
      }
    </div>
  )
}

export default Info;