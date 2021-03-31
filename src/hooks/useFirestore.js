import { useEffect, useState } from 'react';
import { db } from '../services/firebase';

const useFirestore = collection => {

    const [ docs, setDocs ] = useState([]);

    useEffect(() => {
        //looks a lil uhh buggy to me lik this
        const unsub = db.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({...doc.data(), id : doc.id});
            });
            setDocs(documents);
        })

        // cleanup function
        // for unsubscribing to database observable.
        return () => unsub();
        
    }, [collection])

    return { docs }

}
export default useFirestore;