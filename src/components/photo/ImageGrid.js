import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';


const ImageGrid = ({ setSelectedImage }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    /* TODO: frustrating bug we ran into the last time working with storage and firestore together
    
    that is, we cant allow the program to delete the images in storage without deleteing the image doc
    associated in firestore (or vice versa) since this will cause not found bugs.
    */
    
    // Consider that there are times this message will be displayed without cause... experiment
    if (docs === []) {
      return(
        <section>
          <h1>No Images are here to display</h1>
          <p>If you are the owner of this post, click the + / plus icon to upload an image</p>
        </section>
      )
    }

    return(
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div 
                    className="img-wrap" 
                    key={doc.id}
                    whileHover={{opacity:1}}
                    layout
                    onClick={() => setSelectedImage(doc.url)}
                >
                    <motion.img 
                        initial={{opacity : 0}}
                        animate={{opacity: 1}}
                        transition={{delay : 0.35}}
                        src={doc.url} 
                        alt=""/>
                </motion.div>
            )) }
        </div>
    )
}
export default ImageGrid;