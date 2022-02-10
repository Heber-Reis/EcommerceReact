import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import styles from "./styles.module.css";

const NextPrevBtn = ({prev,next}) => 
  <>
    <button className={styles.prev} onClick={prev}>
      <img src={`/images/icon-previous.svg`} width="8px" />
    </button>
    <button className={styles.next} onClick={next}>
      <img src={`/images/icon-next.svg`} width="8px" />
    </button>
  </>


function ItemImage({images, popup, onClick, close}) {

  const [atualImage, setAtualimage] = useState(0);
  const isMobile = useMediaQuery({query: '(max-width: 600px)'});

  const alterImage = (pos) => setAtualimage(pos);

  const alteraBtn = (btn) => {
    if (btn === "next") {
      atualImage + 1 > images.length - 1 ? setAtualimage(0) : setAtualimage(atualImage + 1);
    }
    else {
      atualImage - 1 < 0 ? setAtualimage(images.length - 1) : setAtualimage(atualImage - 1);
    }
  }

  const isSelected = (pos) => pos === atualImage;

  return (
    <div className={classNames(styles.ProductGallery,{[styles.ProductGalleryPopup]: popup})}>
      <button 
        className={styles.BtnPopup}
        onClick={onClick} 
        disabled={(isMobile)}>
          <img className={styles.ImageProduct}
            src={`/images/${images[atualImage]}.jpg`}
            width="100%"
          />
      </button>
      { popup && <>
            <button className={styles.Close} onClick={close}>
              <img src="/images/icon-close.svg" />
            </button>
          </>
      }
      {
        (isMobile || popup) && <NextPrevBtn 
        prev={() => alteraBtn("prev")}
        next={() => alteraBtn("next")}
      />
      }

      <div className={styles.Thumbnail}>
        {
          images.map((value, pos) =>
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