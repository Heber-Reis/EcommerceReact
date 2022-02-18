import styles from "./style.module.css";

import AddCart from "../AddCart/AddCart";

function Info ({product}) {

  const finalPrice = (product.Price * (1 - product.Discount)).toFixed(2);

  return(
    <div>
      <h3 className={styles.Company}>SNEACKER COMPANY</h3>
      <h1 className={styles.Title}>{product.Title}</h1>
      <p className={styles.Description}>{product.Description}</p>
      <div className={styles.Price}>
        <h1>{`R$ ${finalPrice}`}</h1>
        <p className={styles.Discount}>{`${product.Discount*100}%`}</p>
      </div>
      <p className={styles.InitialPrice}>{`R$ ${(product.Price).toFixed(2)}`}</p>
      <AddCart 
        product={product}
      />
    </div>
  )
}

export default Info;