import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
import { Image } from "../../image";

interface ImageGalleryProps {
  images:Image[];
  onImageClick: (image:Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images, onImageClick}) => {

return (<ul className={css.gallery}>
	{images.map((image)=>{
		return (
		<li key = {image.id} className={css.galleryItem}>
		{/* <ImageCard image={image} onClick={onImageClick} /> */}
    <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;