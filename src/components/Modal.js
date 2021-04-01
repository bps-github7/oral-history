import React from 'react'

/* 
    Simple image viewing screen for
    examining a document close-up
 */
const Modal = ({ selectedImage, setSelectedImage }) => {

    const handleClick = (event) => {
        if (event.target.classList.contains('backdrop'))
            setSelectedImage(null);
    }

    return(
        <div 
            className="backdrop"
            onClick={handleClick}
            >
            <img src={selectedImage} alt="selectedImage.description NOTE; youl need to change selectedImage to an object for that."/>
        </div>
    )

}
export default Modal;