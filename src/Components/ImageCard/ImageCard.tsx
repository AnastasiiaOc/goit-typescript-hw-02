import { Image } from "../../image";
import { FC } from "react";

type ImageCardProps = {
    image: Image,
    onClick: () => void;
  };
  
const ImageCard: FC<ImageCardProps>=({ image, onClick }) =>{

    return (
      <div >
        <img
          src={image.urls.small}
          alt={image.alt_description}
          // onClick={() => onClick(image)}
          onClick={() => onClick()}
        />
        {/* <ul >
          <li >By {image.user.name}</li>
          <li >❤️ {image.likes}</li>
        </ul> */}
      </div>
    );
  }

  export default ImageCard;