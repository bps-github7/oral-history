import {useState, useEffect } from 'react';
import { storage, db, timestamp } from '../services/firebase';

const useStorage = file => {
    const [ progress, setProgress ] = useState(0);
    const [ error, setError ] = useState(null);
    const [ url, setUrl ] = useState(null);

    useEffect(() => {

        //get a reference to where the file should be saved
        const storageRef = storage.ref(file.name);
        const collectionRef = db.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100.0;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp
            collectionRef.add({
                url, createdAt
            })
            setUrl(url);
        });
    }, [file])
    return { progress, url, error }
}
export default useStorage