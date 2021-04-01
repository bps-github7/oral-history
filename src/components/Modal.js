import React from 'react'
import { motion } from 'framer-motion';


/* 
    Simple image viewing screen for
    examining a document close-up
 */
const Modal = ({ selectedImage, setSelectedImage }) => {

    const handleClick = (event) => {
        if (event.target.classList.contains('backdrop'))
            setSelectedImage(null);
    }


    // TODO: add event listeners for left and right arrows, and or clicking on two spans to cycle thru images left and right.
    return(
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img 
                initial={{ y: "-100vh"}}
                animate={{ y:0 }}
                transition={{ delay: 0.2 }}
                src={selectedImage} 
                alt="selectedImage.description NOTE; youl need to change selectedImage to an object for that."/>
        </motion.div>
    )

}
export default Modal;