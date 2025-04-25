import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
import { Image } from "../../image";

interface ImageGalleryProps {
  images:Image[];
  onClick: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images, onClick}) => {

return (<ul className={css.gallery}>
	{images.map((image)=>{
		return (
		<li key = {image.id} className={css.galleryItem}>
		<ImageCard image={image} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;