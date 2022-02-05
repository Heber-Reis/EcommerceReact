import { useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

function ItemImage(props) {

  const [atualImage, setAtualimage] = useState(0);

  const alterImage = (pos) => {
    setAtualimage(pos);
  }

  const alteraBtn = (btn) => {
    if (btn === "next") {
      atualImage + 1 > props.images.length - 1 ? setAtualimage(0) : setAtualimage(atualImage + 1);
    }
    else {
      atualImage - 1 < 0 ? setAtualimage(props.images.length - 1) : setAtualimage(atualImage - 1);
    }
  }

  const isSelected = (pos) => pos === atualImage;

  return (
    <div className={styles.ProductGallery}>
      <button 
        className={styles.BtnPopup}
        onClick={props.onClick} 
        disabled={props.popup}>
          <img className={styles.ImageProduct}
            src={`/images/${props.images[atualImage]}.jpg`}
            width="100%"
          />
      </button>
      { props.popup && <>
            <button className={styles.prev} onClick={() => alteraBtn("prev")}>
              <img src={`/images/icon-previous.svg`} />
            </button>
            <button className={styles.next} onClick={() => alteraBtn("next")}>
              <img src={`/images/icon-next.svg`} />
            </button>
          </>
      }

      <div className={styles.Thumbnail}>
        {
          props.images.map((value, pos) =>
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

ItemImage.defaultProps = {
  popup: false
}

export default ItemImage;