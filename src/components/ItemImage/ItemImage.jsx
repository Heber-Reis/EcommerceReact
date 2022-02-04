import { useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

function ItemImage (images) {

  const [atualImage, setAtualimage] = useState(0);

  const alterImage = (pos) => setAtualimage(pos);

  const isSelected = (pos) => pos === atualImage; 

console.log(images.images);
  return(
    <div className={styles.ProductGallery}>
      <img className={styles.ImageProduct} 
           src={`/images/${images.images[atualImage]}.jpg`} 
           width="100%"
      />
      <div className={styles.Thumbnail}>
        {
          images.images.map((value, pos) => 
            <button
              className={classNames(styles.Button, {
                [styles.selectedBtn]: isSelected(pos)
              })}
              key={`images-thumb${pos}`}
              onClick={() => alterImage(pos)}
            >
              <img
                className={classNames(styles.ImageThumb, {
                  [styles.selectedImage]: isSelected(pos)
                })}
                src={`/images/${value}-thumbnail.jpg`}
                width="60px"
              />
            </button>
          )
        }
      </div>
    </div>
  )
}

export default ItemImage;