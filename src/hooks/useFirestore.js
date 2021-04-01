import { useEffect, useState } from 'react';
import { db } from '../services/firebase';

const useFirestore = collection => {
    /* useFirestore- a hook for talking to firestore db

    Uses the hook React.useEffect to create a collection reference, ordered by 'createdAt', descending, 
    of an existing collection in the database (provided through the 'collection' argument).

    Taking a snapshot of the collection in realtime, we then loop over each document,
    returning an array which contains objects with both the document snapshot data and document uid.



    Arguments: [
        collection (required) : string - name of collection within the firestore db
    ]


    Returns: [
        docs : {...snapshot.doc.data(), snapshot.doc.id} [] - array of document objects

    ]

    cleanup: [ unsub() ] - a function which unsubscribes 
    */
    const [ docs, setDocs ] = useState([]);

    // TODO: this could be made into a more generic hook/service if the argument
    // to orderBy was also passed in. For our purposes, the current setup works fine.    
    useEffect(() => {
        const unsub = db.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({...doc.data(), id : doc.id});
            });
            setDocs(documents);
        })
        //"cleanup" fn
        return () => unsub();
        
    }, [collection])

    return { docs }

}
export default useFirestore;