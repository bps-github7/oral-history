import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';


const ImageGrid = ({ setSelectedImage }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

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
                        alt="doc.description"/>
                </motion.div>
            )) }
        </div>
    )
}
export default ImageGrid;