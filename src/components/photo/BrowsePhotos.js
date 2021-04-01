import React, { useState } from 'react';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import './photo.css';



const BrowsePhotos = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    
    
    return(
        <div className="App-browse-photos">
            <UploadForm/>
            <ImageGrid setSelectedImage={setSelectedImage}/>
            { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
        </div>
        
    )
}
export default BrowsePhotos