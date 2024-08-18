import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase.js'; // Import db from firebase.js

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imageCollectionRef = collection(db, "patient"); // Adjust collection name if needed
                const data = await getDocs(imageCollectionRef);
                const imageUrls = data.docs.map((doc) => doc.data().imageUrl); // Adjust field name if needed
                setImages(imageUrls);
            } catch (error) {
                setError('Error fetching images.');
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="flex flex-col items-center max-sm:w-full max-sm:my-0 justify-center min-h-screen m-auto my-8 w-5/6">
            {isLoading && <div className="loading-spinner">Loading images...</div>}
            {error && <div>{error}</div>}
            {!isLoading && !error && (
                <div className="grid grid-cols-3 gap-4">
                    {images.map((url, index) => (
                        <div key={index} className="image-item">
                            <img src={url} alt={`Uploaded image ${index}`} className="w-full h-auto rounded-md shadow-md" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
