import ItemImage from "../ItemImage/ItemImage";
function PopUpImage ({next,previus}) {
  const images = ["image-product-1","image-product-2","image-product-3","image-product-4"];
  return(
    <div>
      <button onClick={next}>Next</button>
      <button onClick={previus}>Previus</button>
      
    </div>
  )
}

export default PopUpImage;