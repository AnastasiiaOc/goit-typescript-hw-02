import ReactModal from 'react-modal';
import css from "./ImageModal.module.css"
import { Params } from '../../image';
import { FC } from 'react';


interface ImageModalProps {
   modalParams: Params;
   onClose: () => void
  }
  
const ImageModal: FC<ImageModalProps> = ({modalParams, onClose})=>{
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          overflow:'hidden',

        }
      };
    return(
        <ReactModal
        style={customStyles}
        overlayClassName={css.backdrop}
        isOpen={modalParams.isOpen}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        onRequestClose={onClose}
        >
        <img className={css.image} src ={modalParams.url} alt ={modalParams.alt} width = "100%"/>
 
        </ReactModal>
      );

}

export default ImageModal;